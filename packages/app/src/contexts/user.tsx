import React, { createContext, useState, useContext, useEffect } from 'react'

interface UserContextData {
  favourites: Array<string>
  triggerFavourite(favourite: string): void;
  setSearch(search: string): void;
  search?: string
}

const UserContext = createContext<UserContextData>({} as UserContextData);

const UserProvider: React.FC = ({ children }) => {
  const [favourites, setFavourites] = useState<any>([])
  const [search, setSearch] = useState<string>('')

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = localStorage.getItem('@movies:user')

      if (storagedUser) {
        setFavourites(JSON.parse(storagedUser))
      }
    }

    loadStorageData()
  }, [])

  function triggerFavourite(favourite: string) {
    if (favourites.includes(favourite)) {
      const newArray = favourites.filter((e: string) => e !== favourite)
      setFavourites(newArray)
      localStorage.setItem('@movies:user', JSON.stringify(newArray))

      return
    }

    setFavourites([...favourites, favourite ])
    localStorage.setItem('@movies:user', JSON.stringify(favourites))
  }

  return (
    <UserContext.Provider value={{ favourites, triggerFavourite, search, setSearch }}>
      {children}
    </UserContext.Provider>
  );
};

function useClient() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useClient must be used within an UserProvider.')
  }

  return context
}

export { UserProvider, useClient }