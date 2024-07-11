import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./components/users";
import TambahBuku from "./components/tambahBuku";
import Login from "./components/login";
import Register from "./components/register";
import UbahRoleUser from "./components/UbahRoleUser";
import ProtectedRoutes from "./components/auth-content/ProtectedRoutes";
import PageError from "./components/PageError";
import ProtectedContent from "./components/auth-content/ProtectedContent";
import PageUser from "./components/auth-content/PageUser";
import ForgotPassword from "./components/ForgotPassword";
import ChangePassword from "./components/ChangePassword";
import ProfilDetail from "./components/ProfilDetail";
import Literasi from "./components/Literasi";
import Vedio from './components/Vedio';
import DetailUsers from "./components/DetailUsers";
import Dashboard from "./components/Dashboard";
import Contact from "./components/Contact";
import PaketPsikolog from "./components/PaketPsikolog";
import Psikolog from "./components/Psikolog";
import Booking from "./components/Booking";
import DetailBooking from "./components/DetailBooking";
import Riwayat from "./components/Riwayat";
import DetailRiwayat from "./components/DetailRiwayat";
import Chat from "./components/chat/Chat";
import UbahPengguna from "./components/ubahPengguna";
import Dashboard_admin from "./components/admin/Dashboard_admin";

function App() {
  return (
    <BrowserRouter>
      {/* <UserContext.Provider value={{ user }}> */}
      <Routes>
        <Route path="*" element={<PageError />}></Route>
        {/* public routes */}
        <Route
          path="/contact"
          element={
            <ProtectedRoutes>
              <Contact />
            </ProtectedRoutes>
          }
        ></Route>
        <Route
          path="/paketpsikolog"
          element={
            <ProtectedRoutes>
              <PaketPsikolog />
            </ProtectedRoutes>
          }
        >
          {/* <Route path="outlet" element={<TestOutlet />}></Route> */}
        </Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/logout" element={<Login />}></Route>
        <Route path="/profil" element={<ProfilDetail />}></Route>
        <Route
          path="/change-password/:id/:token"
          element={<ChangePassword />}
        ></Route>

        {/* protected routes */}
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          }
        ></Route>
        <Route
          path="/psikolog"
          element={
            <ProtectedRoutes>
              <Psikolog />
            </ProtectedRoutes>
          }
        ></Route>
        <Route
          path="/users"
          element={
            <ProtectedRoutes>
              <PageUser>
                <Users />
              </PageUser>
            </ProtectedRoutes>
          }
        ></Route>
        <Route
          path="/tambah"
          element={
            <ProtectedRoutes>
              <ProtectedContent>
                <TambahBuku />
              </ProtectedContent>
            </ProtectedRoutes>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route
          path="/reset-password/:id/:token"
          element={<ChangePassword />}
        ></Route>
        <Route
          path="/ubahRoleUser/:id"
          element={
            <ProtectedRoutes>
              <UbahRoleUser />
            </ProtectedRoutes>
          }
        ></Route>
        <Route
          path="/literasi"
          element={
            <ProtectedRoutes>
              <Literasi />
            </ProtectedRoutes>
          }
        ></Route>
        <Route
          path="/vedio"
          element={
            <ProtectedRoutes>
              <Vedio />
            </ProtectedRoutes>
          }
        ></Route>
        <Route
          path="/detailusers/:id"
          element={
            <ProtectedRoutes>
              <DetailUsers />
            </ProtectedRoutes>
          }
        ></Route>
        <Route
          path="/booking"
          element={
            <ProtectedRoutes>
              <Booking />
            </ProtectedRoutes>
          }
        ></Route>
        <Route
          path="/detail/:id"
          element={
            <ProtectedRoutes>
              <DetailBooking />
            </ProtectedRoutes>
          }
        ></Route>
        <Route
          path="/riwayat"
          element={
            <ProtectedRoutes>
              <Riwayat />
            </ProtectedRoutes>
          }
        ></Route>
        <Route
          path="/detailRiwayat/:id"
          element={
            <ProtectedRoutes>
              <DetailRiwayat />
            </ProtectedRoutes>
          }
        ></Route>
        <Route
          path="/chat"
          element={
            <ProtectedRoutes>
              <Chat />
            </ProtectedRoutes>
          }
        ></Route>
        <Route
          path="/ubah/:id"
          element={
            <ProtectedRoutes>
              <UbahPengguna />
            </ProtectedRoutes>
          }
        ></Route>
        <Route
          path="/dashboard_admin"
          element={
            <ProtectedRoutes>
              <Dashboard_admin />
            </ProtectedRoutes>
          }
        ></Route>
      </Routes>
      {/* </UserContext.Provider> */}
    </BrowserRouter>
  );
}

export default App;
