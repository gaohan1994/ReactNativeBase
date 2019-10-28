import { Toast } from 'teaset';

class Dialog {
  static success = (message: string) => {
    Toast.success(message);
  }

  static fail = (message: string) => {
    Toast.fail(message);
  }
  static smile = (message: string) => {
    Toast.smile(message);
  }
  static sad = (message: string) => {
    Toast.sad(message);
  }
  static info = (message: string) => {
    Toast.info(message);
  }
  static stop = (message: string) => {
    Toast.stop(message);
  }

  static showToast = (message: string, options?: any): void => {
    Toast.sad(message);
  }
}

export default Dialog;