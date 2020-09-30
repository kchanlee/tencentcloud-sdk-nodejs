/**
 * SetVocabState返回参数结构体
 */
export interface SetVocabStateResponse {
    /**
     * 热词表ID
     */
    VocabId?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetAsrVocab返回参数结构体
 */
export interface GetAsrVocabResponse {
    /**
     * 热词表名称
     */
    Name?: string;
    /**
     * 热词表描述
     */
    Description?: string;
    /**
     * 热词表ID
     */
    VocabId?: string;
    /**
     * 词权重列表
     */
    WordWeights?: Array<HotWord>;
    /**
     * 词表创建时间
     */
    CreateTime?: string;
    /**
     * 词表更新时间
     */
    UpdateTime?: string;
    /**
     * 热词表状态，1为默认状态即在识别时默认加载该热词表进行识别，0为初始状态
     */
    State?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 热词的词和权重
 */
export interface HotWord {
    /**
     * 热词
     */
    Word: string;
    /**
     * 权重
     */
    Weight: number;
}
/**
 * GetAsrVocab请求参数结构体
 */
export interface GetAsrVocabRequest {
    /**
     * 热词表ID
     */
    VocabId: string;
}
/**
 * DescribeTaskStatus返回参数结构体
 */
export interface DescribeTaskStatusResponse {
    /**
     * 录音文件识别的请求返回结果。
     */
    Data?: TaskStatus;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DownloadAsrVocab返回参数结构体
 */
export interface DownloadAsrVocabResponse {
    /**
     * 词表ID。
     */
    VocabId?: string;
    /**
     * 词表权重文件形式的base64值。
     */
    WordWeightStr?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateRecTask返回参数结构体
 */
export interface CreateRecTaskResponse {
    /**
     * 录音文件识别的请求返回结果，包含结果查询需要的TaskId
     */
    Data?: Task;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateAsrVocab返回参数结构体
 */
export interface UpdateAsrVocabResponse {
    /**
     * 热词表ID
     */
    VocabId?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteAsrVocab返回参数结构体
 */
export interface DeleteAsrVocabResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetAsrVocabList请求参数结构体
 */
export declare type GetAsrVocabListRequest = null;
/**
 * CreateRecTask请求参数结构体
 */
export interface CreateRecTaskRequest {
    /**
        * 引擎模型类型。
  电话场景：
  • 8k_zh：电话 8k 中文普通话通用（可用于双声道音频）；
  • 8k_zh_s：电话 8k 中文普通话话者分离（仅适用于单声道音频）；
  非电话场景：
  • 16k_zh：16k 中文普通话通用；
  • 16k_zh_video：16k 音视频领域；
  • 16k_en：16k 英语；
  • 16k_ca：16k 粤语；
  • 16k_ja：16k 日语；
  • 16k_wuu-SH：16k 上海话方言；
        */
    EngineModelType: string;
    /**
     * 语音声道数。1：单声道；2：双声道（仅支持 8k_zh 引擎模型）。
     */
    ChannelNum: number;
    /**
     * 识别结果返回形式。0： 识别结果文本(含分段时间戳)； 1：仅支持16k中文引擎，含词级别粒度的[详细识别结果](https://cloud.tencent.com/document/api/1093/37824#SentenceDetail)(词时间戳列表，一般用于生成字幕场景)。
     */
    ResTextFormat: number;
    /**
     * 语音数据来源。0：语音 URL；1：语音数据（post body）。
     */
    SourceType: number;
    /**
     * 回调 URL，用户自行搭建的用于接收识别结果的服务器地址， 长度小于2048字节。如果用户使用回调方式获取识别结果，需提交该参数；如果用户使用轮询方式获取识别结果，则无需提交该参数。
     */
    CallbackUrl?: string;
    /**
     * 语音的URL地址，需要公网可下载。长度小于2048字节，当 SourceType 值为 0 时须填写该字段，为 1 时不需要填写。注意：请确保录音文件时长在5个小时之内，否则可能识别失败。请保证文件的下载速度，否则可能下载失败。
     */
    Url?: string;
    /**
     * 语音数据，当SourceType 值为1时必须填写，为0可不写。要base64编码(采用python语言时注意读取文件应该为string而不是byte，以byte格式读取后要decode()。编码后的数据不可带有回车换行符)。音频数据要小于5MB。
     */
    Data?: string;
    /**
     * 数据长度，非必填（此数据长度为数据未进行base64编码时的数据长度）。
     */
    DataLen?: number;
    /**
     * 热词id。用于调用对应的热词表，如果在调用语音识别服务时，不进行单独的热词id设置，自动生效默认热词；如果进行了单独的热词id设置，那么将生效单独设置的热词id。
     */
    HotwordId?: string;
    /**
     * 是否过滤脏词（目前支持中文普通话引擎）。0：不过滤脏词；1：过滤脏词；2：将脏词替换为 * 。默认值为 0。
     */
    FilterDirty?: number;
    /**
     * 是否过语气词（目前支持中文普通话引擎）。0：不过滤语气词；1：部分过滤；2：严格过滤 。默认值为 0。
     */
    FilterModal?: number;
    /**
     * 是否进行阿拉伯数字智能转换（目前支持中文普通话引擎）。0：不转换，直接输出中文数字，1：根据场景智能转换为阿拉伯数字。默认值为 1。
     */
    ConvertNumMode?: number;
    /**
     * 附加参数
     */
    Extra?: string;
    /**
     * 是否开启话者分离，0：不开启，1：开启(仅支持8k_zh/16k_zh引擎模型，单声道音频)
     */
    SpeakerDiarization?: number;
    /**
        * 话者分离人数（需配合开启话者分离使用），支持2-10（8k_zh仅支持2， 16k_zh支持2-10）
  注：话者分离目前是beta版本，请根据您的需要谨慎使用
        */
    SpeakerNumber?: number;
    /**
     * 是否过滤标点符号（目前支持中文普通话引擎）。 0：不过滤，1：过滤句末标点，2：过滤所有标点。默认为0。
     */
    FilterPunc?: number;
}
/**
 * 单句的详细识别结果，包含单个词的时间偏移，一般用于生成字幕的场景。
 */
export interface SentenceDetail {
    /**
        * 单句最终识别结果
  注意：此字段可能返回 null，表示取不到有效值。
        */
    FinalSentence: string;
    /**
        * 单句中间识别结果，使用空格拆分为多个词
  注意：此字段可能返回 null，表示取不到有效值。
        */
    SliceSentence: string;
    /**
        * 单句开始时间（毫秒）
  注意：此字段可能返回 null，表示取不到有效值。
        */
    StartMs: number;
    /**
        * 单句结束时间（毫秒）
  注意：此字段可能返回 null，表示取不到有效值。
        */
    EndMs: number;
    /**
        * 单句中词个数
  注意：此字段可能返回 null，表示取不到有效值。
        */
    WordsNum: number;
    /**
        * 单句中词详情
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Words: Array<SentenceWords>;
}
/**
 * DownloadAsrVocab请求参数结构体
 */
export interface DownloadAsrVocabRequest {
    /**
     * 词表ID。
     */
    VocabId: string;
}
/**
 * SetVocabState请求参数结构体
 */
export interface SetVocabStateRequest {
    /**
     * 热词表ID。
     */
    VocabId: string;
    /**
     * 热词表状态，1：设为默认状态；0：设为非默认状态。
     */
    State: number;
}
/**
 * 词表内容
 */
export interface Vocab {
    /**
     * 热词表名称
     */
    Name: string;
    /**
     * 热词表描述
     */
    Description: string;
    /**
     * 热词表ID
     */
    VocabId: string;
    /**
     * 词权重列表
     */
    WordWeights: Array<HotWord>;
    /**
     * 词表创建时间
     */
    CreateTime: string;
    /**
     * 词表更新时间
     */
    UpdateTime: string;
    /**
     * 热词表状态，1为默认状态即在识别时默认加载该热词表进行识别，0为初始状态
     */
    State: number;
}
/**
 * 录音文件识别请求的返回数据
 */
export interface Task {
    /**
     * 任务ID，可通过此ID在轮询接口获取识别状态与结果
     */
    TaskId: number;
}
/**
 * 获取录音识别结果结果的返回参数
 */
export interface TaskStatus {
    /**
     * 任务标识。
     */
    TaskId: number;
    /**
     * 任务状态码，0：任务等待，1：任务执行中，2：任务成功，3：任务失败。
     */
    Status: number;
    /**
     * 任务状态，waiting：任务等待，doing：任务执行中，success：任务成功，failed：任务失败。
     */
    StatusStr: string;
    /**
     * 识别结果。
     */
    Result: string;
    /**
     * 失败原因说明。
     */
    ErrorMsg: string;
    /**
        * 识别结果详情，包含每个句子中的词时间偏移，一般用于生成字幕的场景。(录音识别请求中ResTextFormat=1时该字段不为空)
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ResultDetail: Array<SentenceDetail>;
}
/**
 * DeleteAsrVocab请求参数结构体
 */
export interface DeleteAsrVocabRequest {
    /**
     * 热词表Id
     */
    VocabId: string;
}
/**
 * SentenceRecognition请求参数结构体
 */
export interface SentenceRecognitionRequest {
    /**
     * 腾讯云项目 ID，可填 0，总长度不超过 1024 字节。
     */
    ProjectId: number;
    /**
     * 子服务类型。2： 一句话识别。
     */
    SubServiceType: number;
    /**
        * 引擎模型类型。
  电话场景：
  • 8k_zh：电话 8k 中文普通话通用；
  非电话场景：
  • 16k_zh：16k 中文普通话通用；
  • 16k_en：16k 英语；
  • 16k_ca：16k 粤语；
  • 16k_ja：16k 日语；
  •16k_wuu-SH：16k 上海话方言。
        */
    EngSerViceType: string;
    /**
     * 语音数据来源。0：语音 URL；1：语音数据（post body）。
     */
    SourceType: number;
    /**
     * 识别音频的音频格式。mp3、wav。
     */
    VoiceFormat: string;
    /**
     * 用户端对此任务的唯一标识，用户自助生成，用于用户查找识别结果。
     */
    UsrAudioKey: string;
    /**
     * 语音 URL，公网可下载。当 SourceType 值为 0（语音 URL上传） 时须填写该字段，为 1 时不填；URL 的长度大于 0，小于 2048，需进行urlencode编码。音频时间长度要小于60s。
     */
    Url?: string;
    /**
     * 语音数据，当SourceType 值为1（本地语音数据上传）时必须填写，当SourceType 值为0（语音 URL上传）可不写。要使用base64编码(采用python语言时注意读取文件应该为string而不是byte，以byte格式读取后要decode()。编码后的数据不可带有回车换行符)。数据长度要小于3MB（Base64后）。
     */
    Data?: string;
    /**
     * 数据长度，单位为字节。当 SourceType 值为1（本地语音数据上传）时必须填写，当 SourceType 值为0（语音 URL上传）可不写（此数据长度为数据未进行base64编码时的数据长度）。
     */
    DataLen?: number;
    /**
     * 热词id。用于调用对应的热词表，如果在调用语音识别服务时，不进行单独的热词id设置，自动生效默认热词；如果进行了单独的热词id设置，那么将生效单独设置的热词id。
     */
    HotwordId?: string;
    /**
     * 是否过滤脏词（目前支持中文普通话引擎）。0：不过滤脏词；1：过滤脏词；2：将脏词替换为 * 。
     */
    FilterDirty?: number;
    /**
     * 是否过语气词（目前支持中文普通话引擎）。0：不过滤语气词；1：部分过滤；2：严格过滤 。
     */
    FilterModal?: number;
    /**
     * 是否过滤标点符号（目前支持中文普通话引擎）。 0：不过滤，1：过滤句末标点，2：过滤所有标点。默认为0。
     */
    FilterPunc?: number;
    /**
     * 是否进行阿拉伯数字智能转换。0：不转换，直接输出中文数字，1：根据场景智能转换为阿拉伯数字。默认值为1
     */
    ConvertNumMode?: number;
}
/**
 * CreateAsrVocab请求参数结构体
 */
export interface CreateAsrVocabRequest {
    /**
     * 热词表名称，长度在1-255之间
     */
    Name: string;
    /**
     * 热词表描述，长度在0-1000之间
     */
    Description?: string;
    /**
     * 词权重数组，包含全部的热词和对应的权重。每个热词的长度不大于10，权重为[1,10]之间整数，数组长度不大于128
     */
    WordWeights?: Array<HotWord>;
    /**
        * 词权重文件（纯文本文件）的二进制base64编码，以行分隔，每行的格式为word|weight，即以英文符号|为分割，左边为词，右边为权重，如：你好|5。
  当用户传此参数（参数长度大于0），即以此参数解析词权重，WordWeights会被忽略
        */
    WordWeightStr?: string;
}
/**
 * UpdateAsrVocab请求参数结构体
 */
export interface UpdateAsrVocabRequest {
    /**
     * 热词表ID
     */
    VocabId: string;
    /**
     * 热词表名称
     */
    Name?: string;
    /**
     * 词权重数组，包含全部的热词和对应的权重。每个热词的长度不大于10，权重为[1,10]之间整数，数组长度不大于128
     */
    WordWeights?: Array<HotWord>;
    /**
        * 词权重文件（纯文本文件）的二进制base64编码，以行分隔，每行的格式为word|weight，即以英文符号|为分割，左边为词，右边为权重，如：你好|5。
  当用户传此参数（参数长度大于0），即以此参数解析词权重，WordWeights会被忽略
        */
    WordWeightStr?: string;
    /**
     * 热词表描述
     */
    Description?: string;
}
/**
 * CreateAsrVocab返回参数结构体
 */
export interface CreateAsrVocabResponse {
    /**
     * 词表ID，可用于获取词表信息
     */
    VocabId?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SentenceRecognition返回参数结构体
 */
export interface SentenceRecognitionResponse {
    /**
     * 识别结果。
     */
    Result?: string;
    /**
     * 请求的音频时长，单位为ms
     */
    AudioDuration?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTaskStatus请求参数结构体
 */
export interface DescribeTaskStatusRequest {
    /**
     * 从CreateRecTask接口获取的TaskId，用于获取任务状态与结果。
     */
    TaskId: number;
}
/**
 * GetAsrVocabList返回参数结构体
 */
export interface GetAsrVocabListResponse {
    /**
     * 热词表列表
     */
    VocabList?: Array<Vocab>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 识别结果中词文本，以及对应时间偏移
 */
export interface SentenceWords {
    /**
        * 词文本
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Word: string;
    /**
        * 在句子中的开始时间偏移量
  注意：此字段可能返回 null，表示取不到有效值。
        */
    OffsetStartMs: number;
    /**
        * 在句子中的结束时间偏移量
  注意：此字段可能返回 null，表示取不到有效值。
        */
    OffsetEndMs: number;
}
