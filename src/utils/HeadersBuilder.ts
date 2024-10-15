import { TokenModel } from '../shared/domain/TokenModel'
export class HeadersBuilder {
  static buildSimpleAutorizationHeader (tokenModel: TokenModel) {
    const { token } = tokenModel
    return {
      Authorization: `Bearer ${token}`,
      'content-type': 'application/json',
      Accept: 'application/json'
    }
  }

  static buildFormDataAutorizationHeader (tokenModel: TokenModel) {
    const { token } = tokenModel
    return {
      Authorization: `Bearer ${token}`
    }
  }
}
