import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { MlmMatrixList } from "./mlmMatrix/MlmMatrixList";
import { MlmMatrixCreate } from "./mlmMatrix/MlmMatrixCreate";
import { MlmMatrixEdit } from "./mlmMatrix/MlmMatrixEdit";
import { MlmMatrixShow } from "./mlmMatrix/MlmMatrixShow";
import { MlmBinaryList } from "./mlmBinary/MlmBinaryList";
import { MlmBinaryCreate } from "./mlmBinary/MlmBinaryCreate";
import { MlmBinaryEdit } from "./mlmBinary/MlmBinaryEdit";
import { MlmBinaryShow } from "./mlmBinary/MlmBinaryShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ECommerceService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
        <Resource
          name="MlmMatrix"
          list={MlmMatrixList}
          edit={MlmMatrixEdit}
          create={MlmMatrixCreate}
          show={MlmMatrixShow}
        />
        <Resource
          name="MlmBinary"
          list={MlmBinaryList}
          edit={MlmBinaryEdit}
          create={MlmBinaryCreate}
          show={MlmBinaryShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
