/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { AbstractClient, ClientConfig } from "../../../common/abstract_client"
import {
  RiskDetails,
  TextModerationRequest,
  DetailResults,
  AccountTipoffAccessRequest,
  Device,
  TipoffResponse,
  AccountTipoffAccessResponse,
  TextModerationResponse,
  User,
} from "./tms_models"

/**
 * tms client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("tms.tencentcloudapi.com", "2020-07-13", clientConfig)
  }

  /**
   * 举报恶意账号
   */
  async AccountTipoffAccess(
    req: AccountTipoffAccessRequest,
    cb?: (error: string, rep: AccountTipoffAccessResponse) => void
  ): Promise<AccountTipoffAccessResponse> {
    return this.request("AccountTipoffAccess", req, cb)
  }

  /**
   * 文本内容检测（Text Moderation）服务使用了深度学习技术，识别涉黄、涉政、涉恐等有害内容，同时支持用户配置词库，打击自定义的违规文本。
   */
  async TextModeration(
    req: TextModerationRequest,
    cb?: (error: string, rep: TextModerationResponse) => void
  ): Promise<TextModerationResponse> {
    return this.request("TextModeration", req, cb)
  }
}