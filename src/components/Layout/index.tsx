import React from "react";
import Header from "../Header";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container, Content } from "./styles";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Container>
        <Header />
        <Content>
          {children}
        </Content>
      </Container>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Layout;
