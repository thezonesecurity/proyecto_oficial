import App from "./App";
const application: App = new App();
application.getApp().listen(application.getPort(), () => {
  console.log(`Server running in puerto ${application.getPort()}`);
});
