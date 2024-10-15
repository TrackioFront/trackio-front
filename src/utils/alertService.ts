import eventBus from "../eventBus";

const showAlert = (message: string, type: string = "error") => {
  eventBus.emit("show-alert", { message, type });
};

export default showAlert;
