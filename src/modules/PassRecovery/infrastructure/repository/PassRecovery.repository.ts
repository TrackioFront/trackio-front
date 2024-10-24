import { GenericResponse } from "../../../../models/Http";
import { HeadersBuilder } from "../../../../utils/HeadersBuilder";
import { DataToPassRecovery } from "../../domain/PassRecoveryController";

export default class PassRecoveryRepository {
  private urlServer = process.env.REACT_APP_API_URL;
  async userPassRecovery(data: DataToPassRecovery): Promise<GenericResponse> {
    console.log(data);
    const url = this.urlServer + `/auth/reset-password?token=${data.token}`;
    const headers = HeadersBuilder.buildSimpleAutorizationHeader(data);
    delete data.token;
    const response = await fetch(url,
      {
        method: "POST",
        headers,
        body: JSON.stringify(data),
      }
    );

    const responseJson = await response.json();
    return responseJson;
  }

  async sendCode(data: DataToPassRecovery): Promise<GenericResponse> {
    const response = await fetch(
      this.urlServer + `/email-sender/reset-password/${data.email}`
    );
    const responseJson = await response.json();
    return responseJson;
  }
}
