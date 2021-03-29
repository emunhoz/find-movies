import React, { createContext, useState, useContext, useEffect } from 'react'

interface UserContextData {
  favourites: Array<string>
  triggerFavourite(favourite: string): void;
  searchInputValue(search: string): void;
  search?: string
}

const UserContext = createContext<UserContextData>({} as UserContextData);

const UserProvider: React.FC = ({ children }) => {
  const [favourites, setFavourites] = useState<any>([])
  const [search, setSearch] = useState<string>('')

  useEffect(() => {
    function loadStorageData() {
      const item = localStorage.getItem('@movies:user')
  
      if (item) {
        setFavourites(JSON.parse(item))
      }
    }

    function loadSearchInput() {
      const item = sessionStorage.getItem('@movies:search')
  
      if (item) {
        setSearch(item)
      }
    }

    loadStorageData()
    loadSearchInput()
  }, [search])

  function searchInputValue(searchItem: string) {
    setSearch(searchItem)
    sessionStorage.setItem('@movies:search', searchItem)
  }

  function triggerFavourite(favourite: string) {
    if (favourites.includes(favourite)) {
      const newArray = favourites.filter((e: string) => e !== favourite)
      setFavourites(newArray)
      localStorage.setItem('@movies:user', JSON.stringify(newArray))

      return
    }

    setFavourites([...favourites, favourite ])
    localStorage.setItem('@movies:user', JSON.stringify([...favourites, favourite ]))
  }

  return (
    <UserContext.Provider value={{ favourites, triggerFavourite, search, searchInputValue }}>
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