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
import Dashboard_Admin from "./components/admin/Dashboard_Admin";
import ContactAdmin from "./components/admin/ContactAdmin";
import EditContact from "./components/admin/EditContact";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PageError />} />
        {/* public routes */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Login />} />
        <Route path="/profil" element={<ProfilDetail />} />
        <Route path="/change-password/:id/:token" element={<ChangePassword />} />
        <Route path="/psikolog" element={<Psikolog />}/>
        <Route path="/vedio" element={<Vedio />}/>
        <Route path="/literasi" element={<Literasi />}/>

        {/* protected routes */}
        <Route path="/paketpsikolog" 
        element={
          <ProtectedRoutes>
            <PageUser>
            <PaketPsikolog />
            </PageUser>
          </ProtectedRoutes>
        } 
        />
        <Route
          path="/users"
          element={
            <ProtectedRoutes>
              <PageUser>
                <Users />
              </PageUser>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/tambah"
          element={
            <ProtectedRoutes>
              <ProtectedContent>
                <TambahBuku />
              </ProtectedContent>
            </ProtectedRoutes>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:id/:token" element={<ChangePassword />} />
        <Route
          path="/ubahRoleUser/:id"
          element={
            <ProtectedRoutes>
              <UbahRoleUser />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/detailusers/:id"
          element={
            <ProtectedRoutes>
              <DetailUsers />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/booking"
          element={
            <ProtectedRoutes>
              <Booking />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <ProtectedRoutes>
              <DetailBooking />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/riwayat"
          element={
            <ProtectedRoutes>
              <Riwayat />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/detailRiwayat/:id"
          element={
            <ProtectedRoutes>
              <DetailRiwayat />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/chat"
          element={
            <ProtectedRoutes>
              <Chat />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/ubah/:id"
          element={
            <ProtectedRoutes>
              <UbahPengguna />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/dashboard_admin"
          element={
            <ProtectedRoutes>
              <Dashboard_Admin />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/contact_admin"
          element={
            <ProtectedRoutes>
              <ContactAdmin />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/editcontact/:id"
          element={
            <ProtectedRoutes>
              <EditContact />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
