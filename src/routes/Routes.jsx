
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from 'components/pages/Home/Home';
import { Catalog } from 'components/pages/Catalog/Catalog';
import { Favorites } from 'components/pages/Favorites/Favorites';

export const AppRoutes = () => {
  return (
    <Routes>
        <Route index element={<Home/>}></Route>
        <Route path={"/catalog"} element={<Catalog />} />
        <Route path={"/favorites"} element={<Favorites />} />
        <Route path={"*"} element={<Home/>} />       
    </Routes>
  )
}
