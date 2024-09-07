import Header from "./Header"

export const Layout = ({ children }) => {

  return <div className="grid grid-rows-layout min-h-screen">
    <Header />

    <div className="p-5 ">
      {
        children
      }
    </div>
  </div>
}
