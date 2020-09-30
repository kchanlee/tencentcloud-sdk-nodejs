/**
 * 多云盘参数
 */
export interface MultiDiskMC {
    /**
        * 该类型云盘个数
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Count: number;
    /**
        * 磁盘类型
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Type?: number;
    /**
        * 云盘大小
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Volume?: number;
}
/**
 * EMR产品配置
 */
export interface EmrProductConfigOutter {
    /**
        * 软件信息
  注意：此字段可能返回 null，表示取不到有效值。
        */
    SoftInfo: Array<string>;
    /**
        * Master节点个数
  注意：此字段可能返回 null，表示取不到有效值。
        */
    MasterNodeSize: number;
    /**
        * Core节点个数
  注意：此字段可能返回 null，表示取不到有效值。
        */
    CoreNodeSize: number;
    /**
        * Task节点个数
  注意：此字段可能返回 null，表示取不到有效值。
        */
    TaskNodeSize: number;
    /**
        * Common节点个数
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ComNodeSize: number;
    /**
        * Master节点资源
  注意：此字段可能返回 null，表示取不到有效值。
        */
    MasterResource: OutterResource;
    /**
        * Core节点资源
  注意：此字段可能返回 null，表示取不到有效值。
        */
    CoreResource: OutterResource;
    /**
        * Task节点资源
  注意：此字段可能返回 null，表示取不到有效值。
        */
    TaskResource: OutterResource;
    /**
        * Common节点资源
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ComResource: OutterResource;
    /**
        * 是否使用COS
  注意：此字段可能返回 null，表示取不到有效值。
        */
    OnCos: boolean;
    /**
        * 收费类型
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ChargeType: number;
    /**
        * Router节点个数
  注意：此字段可能返回 null，表示取不到有效值。
        */
    RouterNodeSize: number;
    /**
        * 是否支持HA
  注意：此字段可能返回 null，表示取不到有效值。
        */
    SupportHA: boolean;
    /**
        * 是否支持安全模式
  注意：此字段可能返回 null，表示取不到有效值。
        */
    SecurityOn: boolean;
    /**
        * 安全组名称
  注意：此字段可能返回 null，表示取不到有效值。
        */
    SecurityGroup: string;
    /**
        * 是否开启Cbs加密
  注意：此字段可能返回 null，表示取不到有效值。
        */
    CbsEncrypt: number;
}
/**
 * 登录设置
 */
export interface LoginSettings {
    /**
     * Password
     */
    Password?: string;
    /**
     * Public Key
     */
    PublicKeyId?: string;
}
/**
 * VPC 参数
 */
export interface VPCSettings {
    /**
     * VPC ID
     */
    VpcId: string;
    /**
     * Subnet ID
     */
    SubnetId: string;
}
/**
 * 询价资源
 */
export interface PriceResource {
    /**
        * 需要的规格
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Spec: string;
    /**
        * 硬盘类型
  注意：此字段可能返回 null，表示取不到有效值。
        */
    StorageType: number;
    /**
        * 硬盘类型
  注意：此字段可能返回 null，表示取不到有效值。
        */
    DiskType: string;
    /**
        * 系统盘大小
  注意：此字段可能返回 null，表示取不到有效值。
        */
    RootSize: number;
    /**
        * 内存大小
  注意：此字段可能返回 null，表示取不到有效值。
        */
    MemSize: number;
    /**
        * 核心数量
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Cpu: number;
    /**
        * 硬盘大小
  注意：此字段可能返回 null，表示取不到有效值。
        */
    DiskSize: number;
    /**
        * 云盘列表
  注意：此字段可能返回 null，表示取不到有效值。
        */
    MultiDisks: Array<MultiDisk>;
    /**
        * 磁盘数量
  注意：此字段可能返回 null，表示取不到有效值。
        */
    DiskCnt: number;
    /**
        * 规格
  注意：此字段可能返回 null，表示取不到有效值。
        */
    InstanceType: string;
    /**
        * 标签
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Tags: Array<Tag>;
    /**
        * 磁盘数量
  注意：此字段可能返回 null，表示取不到有效值。
        */
    DiskNum: number;
    /**
        * 本地盘的数量
  注意：此字段可能返回 null，表示取不到有效值。
        */
    LocalDiskNum: number;
}
/**
 * ScaleOutInstance返回参数结构体
 */
export interface ScaleOutInstanceResponse {
    /**
     * 实例ID。
     */
    InstanceId?: string;
    /**
        * 订单号。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    DealNames?: Array<string>;
    /**
        * 客户端Token。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ClientToken?: string;
    /**
        * 扩容流程ID。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    FlowId?: number;
    /**
        * 大订单号。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    BillId?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * InquiryPriceCreateInstance请求参数结构体
 */
export interface InquiryPriceCreateInstanceRequest {
    /**
        * 购买实例的时间单位。取值范围：
  <li>s：表示秒。PayMode取值为0时，TimeUnit只能取值为s。</li>
  <li>m：表示月份。PayMode取值为1时，TimeUnit只能取值为m。</li>
        */
    TimeUnit: string;
    /**
        * 购买实例的时长。结合TimeUnit一起使用。
  <li>TimeUnit为s时，该参数只能填写3600，表示按量计费实例。</li>
  <li>TimeUnit为m时，该参数填写的数字表示包年包月实例的购买时长，如1表示购买一个月</li>
        */
    TimeSpan: number;
    /**
     * 询价的节点规格。
     */
    ResourceSpec: NewResourceSpec;
    /**
        * 货币种类。取值范围：
  <li>CNY：表示人民币。</li>
        */
    Currency: string;
    /**
        * 实例计费模式。取值范围：
  <li>0：表示按量计费。</li>
  <li>1：表示包年包月。</li>
        */
    PayMode: number;
    /**
        * 是否开启节点高可用。取值范围：
  <li>0：表示不开启节点高可用。</li>
  <li>1：表示开启节点高可用。</li>
        */
    SupportHA: number;
    /**
        * 部署的组件列表。不同的EMR产品ID（ProductId：具体含义参考入参ProductId字段）需要选择不同的必选组件：
  <li>ProductId为1的时候，必选组件包括：hadoop-2.7.3、knox-1.2.0、zookeeper-3.4.9</li>
  <li>ProductId为2的时候，必选组件包括：hadoop-2.7.3、knox-1.2.0、zookeeper-3.4.9</li>
  <li>ProductId为4的时候，必选组件包括：hadoop-2.8.4、knox-1.2.0、zookeeper-3.4.9</li>
  <li>ProductId为7的时候，必选组件包括：hadoop-3.1.2、knox-1.2.0、zookeeper-3.4.9</li>
        */
    Software: Array<string>;
    /**
     * 实例所在的位置。通过该参数可以指定实例所属可用区，所属项目等属性。
     */
    Placement: Placement;
    /**
     * 私有网络相关信息配置。通过该参数可以指定私有网络的ID，子网ID等信息。
     */
    VPCSettings: VPCSettings;
    /**
        * hive共享元数据库类型。取值范围：
  <li>EMR_NEW_META：表示集群默认创建</li>
  <li>EMR_EXIT_METE：表示集群使用指定EMR-MetaDB。</li>
  <li>USER_CUSTOM_META：表示集群使用自定义MetaDB。</li>
        */
    MetaType?: string;
    /**
     * EMR-MetaDB实例
     */
    UnifyMetaInstanceId?: string;
    /**
     * 自定义MetaDB信息
     */
    MetaDBInfo?: CustomMetaInfo;
    /**
        * 产品ID，不同产品ID表示不同的EMR产品版本。取值范围：
  <li>1：表示EMR-V1.3.1。</li>
  <li>2：表示EMR-V2.0.1。</li>
  <li>4：表示EMR-V2.1.0。</li>
  <li>7：表示EMR-V3.0.0。</li>
        */
    ProductId?: number;
}
/**
 * 资源详情
 */
export interface Resource {
    /**
        * 节点规格描述
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Spec: string;
    /**
        * 存储类型
  注意：此字段可能返回 null，表示取不到有效值。
        */
    StorageType: number;
    /**
        * 磁盘类型
  注意：此字段可能返回 null，表示取不到有效值。
        */
    DiskType: string;
    /**
        * 内存容量,单位为M
  注意：此字段可能返回 null，表示取不到有效值。
        */
    MemSize: number;
    /**
        * CPU核数
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Cpu: number;
    /**
        * 数据盘容量
  注意：此字段可能返回 null，表示取不到有效值。
        */
    DiskSize: number;
    /**
        * 系统盘容量
  注意：此字段可能返回 null，表示取不到有效值。
        */
    RootSize?: number;
    /**
        * 云盘列表，当数据盘为一块云盘时，直接使用DiskType和DiskSize参数，超出部分使用MultiDisks
  注意：此字段可能返回 null，表示取不到有效值。
        */
    MultiDisks?: Array<MultiDisk>;
    /**
        * 需要绑定的标签列表
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Tags?: Array<Tag>;
    /**
        * 规格类型
  注意：此字段可能返回 null，表示取不到有效值。
        */
    InstanceType?: string;
    /**
        * 本地盘数量
  注意：此字段可能返回 null，表示取不到有效值。
        */
    LocalDiskNum?: number;
    /**
        * 盘数量
  注意：此字段可能返回 null，表示取不到有效值。
        */
    DiskNum?: number;
}
/**
 * TerminateInstance请求参数结构体
 */
export interface TerminateInstanceRequest {
    /**
     * 实例ID。
     */
    InstanceId: string;
    /**
     * 销毁节点ID。该参数为预留参数，用户无需配置。
     */
    ResourceIds?: Array<string>;
}
/**
 * Pod的存储设备描述信息。
 */
export interface PodVolume {
    /**
        * 存储类型，可为"pvc"，"hostpath"。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    VolumeType: string;
    /**
        * 当VolumeType为"pvc"时，该字段生效。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    PVCVolume?: PersistentVolumeContext;
    /**
        * 当VolumeType为"hostpath"时，该字段生效。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    HostVolume?: HostVolumeContext;
}
/**
 * TerminateInstance返回参数结构体
 */
export interface TerminateInstanceResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateInstance返回参数结构体
 */
export interface CreateInstanceResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 扩容容器资源时的资源描述
 */
export interface PodSpec {
    /**
     * 外部资源提供者的标识符，例如"cls-a1cd23fa"。
     */
    ResourceProviderIdentifier: string;
    /**
     * 外部资源提供者类型，例如"tke",当前仅支持"tke"。
     */
    ResourceProviderType: string;
    /**
     * 资源的用途，即节点类型，当前仅支持"TASK"。
     */
    NodeType: string;
    /**
     * CPU核数。
     */
    Cpu: number;
    /**
     * 内存大小，单位为GB。
     */
    Memory: number;
    /**
     * 资源对宿主机的挂载点，指定的挂载点对应了宿主机的路径，该挂载点在Pod中作为数据存储目录使用。弃用
     */
    DataVolumes?: Array<string>;
    /**
     * Eks集群-CPU类型，当前支持"intel"和"amd"
     */
    CpuType?: string;
    /**
     * Pod节点数据目录挂载信息。
     */
    PodVolumes?: Array<PodVolume>;
}
/**
 * InquiryPriceRenewInstance返回参数结构体
 */
export interface InquiryPriceRenewInstanceResponse {
    /**
        * 原价，单位为元。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    OriginalCost?: number;
    /**
        * 折扣价，单位为元。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    DiscountCost?: number;
    /**
        * 实例续费的时间单位。取值范围：
  <li>m：表示月份。</li>
  注意：此字段可能返回 null，表示取不到有效值。
        */
    TimeUnit?: string;
    /**
        * 实例续费的时长。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    TimeSpan?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * TerminateTasks请求参数结构体
 */
export interface TerminateTasksRequest {
    /**
     * 实例ID。
     */
    InstanceId: string;
    /**
     * 待销毁节点的资源ID列表。资源ID形如：emr-vm-xxxxxxxx。有效的资源ID可通过登录[控制台](https://console.cloud.tencent.com/emr/static/hardware)查询。
     */
    ResourceIds: Array<string>;
}
/**
 * InquiryPriceCreateInstance返回参数结构体
 */
export interface InquiryPriceCreateInstanceResponse {
    /**
        * 原价，单位为元。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    OriginalCost?: number;
    /**
        * 折扣价，单位为元。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    DiscountCost?: number;
    /**
        * 购买实例的时间单位。取值范围：
  <li>s：表示秒。</li>
  <li>m：表示月份。</li>
  注意：此字段可能返回 null，表示取不到有效值。
        */
    TimeUnit?: string;
    /**
        * 购买实例的时长。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    TimeSpan?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * Pod HostPath挂载方式描述
 */
export interface HostVolumeContext {
    /**
        * Pod挂载宿主机的目录。资源对宿主机的挂载点，指定的挂载点对应了宿主机的路径，该挂载点在Pod中作为数据存储目录使用
  注意：此字段可能返回 null，表示取不到有效值。
        */
    VolumePath: string;
}
/**
 * DescribeClusterNodes请求参数结构体
 */
export interface DescribeClusterNodesRequest {
    /**
     * 集群实例ID,实例ID形如: emr-xxxxxxxx
     */
    InstanceId: string;
    /**
        * 节点标识，取值为：
  <li>all：表示获取全部类型节点，cdb信息除外。</li>
  <li>master：表示获取master节点信息。</li>
  <li>core：表示获取core节点信息。</li>
  <li>task：表示获取task节点信息。</li>
  <li>common：表示获取common节点信息。</li>
  <li>router：表示获取router节点信息。</li>
  <li>db：表示获取正常状态的cdb信息。</li>
  <li>recyle：表示获取回收站隔离中的节点信息，包括cdb信息。</li>
  <li>renew：表示获取所有待续费的节点信息，包括cdb信息，自动续费节点不会返回。</li>
  注意：现在只支持以上取值，输入其他值会导致错误。
        */
    NodeFlag: string;
    /**
     * 页编号，默认值为0，表示第一页。
     */
    Offset?: number;
    /**
     * 每页返回数量，默认值为100，最大值为100。
     */
    Limit?: number;
    /**
     * 资源类型:支持all/host/pod，默认为all
     */
    HardwareResourceType?: string;
    /**
     * 支持搜索的字段
     */
    SearchFields?: Array<SearchItem>;
}
/**
 * 预执行脚本配置
 */
export interface PreExecuteFileSettings {
    /**
     * 脚本在COS上路径，已废弃
     */
    Path?: string;
    /**
     * 执行脚本参数
     */
    Args?: Array<string>;
    /**
     * COS的Bucket名称，已废弃
     */
    Bucket?: string;
    /**
     * COS的Region名称，已废弃
     */
    Region?: string;
    /**
     * COS的Domain数据，已废弃
     */
    Domain?: string;
    /**
     * 执行顺序
     */
    RunOrder?: number;
    /**
     * resourceAfter 或 clusterAfter
     */
    WhenRun?: string;
    /**
     * 脚本文件名，已废弃
     */
    CosFileName?: string;
    /**
     * 脚本的cos地址
     */
    CosFileURI?: string;
    /**
     * cos的SecretId
     */
    CosSecretId?: string;
    /**
     * Cos的SecretKey
     */
    CosSecretKey?: string;
    /**
     * cos的appid，已废弃
     */
    AppId?: string;
}
/**
 * CreateInstance请求参数结构体
 */
export interface CreateInstanceRequest {
    /**
        * 产品ID，不同产品ID表示不同的EMR产品版本。取值范围：
  <li>1：表示EMR-V1.3.1。</li>
  <li>2：表示EMR-V2.0.1。</li>
  <li>4：表示EMR-V2.1.0。</li>
  <li>7：表示EMR-V3.0.0。</li>
        */
    ProductId: number;
    /**
     * 私有网络相关信息配置。通过该参数可以指定私有网络的ID，子网ID等信息。
     */
    VPCSettings: VPCSettings;
    /**
        * 部署的组件列表。不同的EMR产品ID（ProductId：具体含义参考入参ProductId字段）需要选择不同的必选组件：
  <li>ProductId为1的时候，必选组件包括：hadoop-2.7.3、knox-1.2.0、zookeeper-3.4.9</li>
  <li>ProductId为2的时候，必选组件包括：hadoop-2.7.3、knox-1.2.0、zookeeper-3.4.9</li>
  <li>ProductId为4的时候，必选组件包括：hadoop-2.8.4、knox-1.2.0、zookeeper-3.4.9</li>
  <li>ProductId为7的时候，必选组件包括：hadoop-3.1.2、knox-1.2.0、zookeeper-3.4.9</li>
        */
    Software: Array<string>;
    /**
     * 节点资源的规格。
     */
    ResourceSpec: NewResourceSpec;
    /**
        * 是否开启节点高可用。取值范围：
  <li>0：表示不开启节点高可用。</li>
  <li>1：表示开启节点高可用。</li>
        */
    SupportHA: number;
    /**
        * 实例名称。
  <li>长度限制为6-36个字符。</li>
  <li>只允许包含中文、字母、数字、-、_。</li>
        */
    InstanceName: string;
    /**
        * 实例计费模式。取值范围：
  <li>0：表示按量计费。</li>
  <li>1：表示包年包月。</li>
        */
    PayMode: number;
    /**
     * 实例所在的位置。通过该参数可以指定实例所属可用区，所属项目等属性。
     */
    Placement: Placement;
    /**
        * 购买实例的时长。结合TimeUnit一起使用。
  <li>TimeUnit为s时，该参数只能填写3600，表示按量计费实例。</li>
  <li>TimeUnit为m时，该参数填写的数字表示包年包月实例的购买时长，如1表示购买一个月</li>
        */
    TimeSpan: number;
    /**
        * 购买实例的时间单位。取值范围：
  <li>s：表示秒。PayMode取值为0时，TimeUnit只能取值为s。</li>
  <li>m：表示月份。PayMode取值为1时，TimeUnit只能取值为m。</li>
        */
    TimeUnit: string;
    /**
        * 实例登录设置。通过该参数可以设置所购买节点的登录方式密码或者密钥。
  <li>设置密钥时，密码仅用于组件原生WebUI快捷入口登录。</li>
  <li>未设置密钥时，密码用于登录所购节点以及组件原生WebUI快捷入口登录。</li>
        */
    LoginSettings: LoginSettings;
    /**
     * 开启COS访问需要设置的参数。
     */
    COSSettings?: COSSettings;
    /**
     * 实例所属安全组的ID，形如sg-xxxxxxxx。该参数可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808) 的返回值中的SecurityGroupId字段来获取。
     */
    SgId?: string;
    /**
     * 引导操作脚本设置。
     */
    PreExecutedFileSettings?: Array<PreExecuteFileSettings>;
    /**
        * 包年包月实例是否自动续费。取值范围：
  <li>0：表示不自动续费。</li>
  <li>1：表示自动续费。</li>
        */
    AutoRenew?: number;
    /**
     * 客户端Token。
     */
    ClientToken?: string;
    /**
        * 是否开启集群Master节点公网。取值范围：
  <li>NEED_MASTER_WAN：表示开启集群Master节点公网。</li>
  <li>NOT_NEED_MASTER_WAN：表示不开启。</li>默认开启集群Master节点公网。
        */
    NeedMasterWan?: string;
    /**
     * 是否需要开启外网远程登录，即22号端口。在SgId不为空时，该参数无效。
     */
    RemoteLoginAtCreate?: number;
    /**
     * 是否开启安全集群。0表示不开启，非0表示开启。
     */
    CheckSecurity?: number;
    /**
     * 访问外部文件系统。
     */
    ExtendFsField?: string;
    /**
     * 标签描述列表。通过指定该参数可以同时绑定标签到相应的实例。
     */
    Tags?: Array<Tag>;
    /**
     * 分散置放群组ID列表，当前只支持指定一个。
     */
    DisasterRecoverGroupIds?: Array<string>;
    /**
     * 集群维度CBS加密盘，默认0表示不加密，1表示加密
     */
    CbsEncrypt?: number;
    /**
        * hive共享元数据库类型。取值范围：
  <li>EMR_NEW_META：表示集群默认创建</li>
  <li>EMR_EXIT_METE：表示集群使用指定EMR-MetaDB。</li>
  <li>USER_CUSTOM_META：表示集群使用自定义MetaDB。</li>
        */
    MetaType?: string;
    /**
     * EMR-MetaDB实例
     */
    UnifyMetaInstanceId?: string;
    /**
     * 自定义MetaDB信息
     */
    MetaDBInfo?: CustomMetaInfo;
}
/**
 * DescribeInstances返回参数结构体
 */
export interface DescribeInstancesResponse {
    /**
     * 符合条件的实例总数。
     */
    TotalCnt?: number;
    /**
        * EMR实例详细信息列表。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ClusterList?: Array<ClusterInstancesInfo>;
    /**
        * 实例关联的标签键列表。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    TagKeys?: Array<string>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * InquiryPriceScaleOutInstance请求参数结构体
 */
export interface InquiryPriceScaleOutInstanceRequest {
    /**
        * 扩容的时间单位。取值范围：
  <li>s：表示秒。PayMode取值为0时，TimeUnit只能取值为s。</li>
  <li>m：表示月份。PayMode取值为1时，TimeUnit只能取值为m。</li>
        */
    TimeUnit: string;
    /**
        * 扩容的时长。结合TimeUnit一起使用。
  <li>TimeUnit为s时，该参数只能填写3600，表示按量计费实例。</li>
  <li>TimeUnit为m时，该参数填写的数字表示包年包月实例的购买时长，如1表示购买一个月</li>
        */
    TimeSpan: number;
    /**
     * 实例所属的可用区ID，例如100003。该参数可以通过调用 [DescribeZones](https://cloud.tencent.com/document/api/213/15707) 的返回值中的ZoneId字段来获取。
     */
    ZoneId: number;
    /**
        * 实例计费模式。取值范围：
  <li>0：表示按量计费。</li>
  <li>1：表示包年包月。</li>
        */
    PayMode: number;
    /**
     * 实例ID。
     */
    InstanceId: string;
    /**
     * 扩容的Core节点数量。
     */
    CoreCount: number;
    /**
     * 扩容的Task节点数量。
     */
    TaskCount: number;
    /**
        * 货币种类。取值范围：
  <li>CNY：表示人民币。</li>
        */
    Currency: string;
    /**
     * 扩容的Router节点数量。
     */
    RouterCount?: number;
}
/**
 * 标签
 */
export interface Tag {
    /**
     * 标签键
     */
    TagKey?: string;
    /**
     * 标签值
     */
    TagValue?: string;
}
/**
 * 描述集群实例位置信息
 */
export interface Placement {
    /**
     * 实例所属项目ID。该参数可以通过调用 DescribeProject 的返回值中的 projectId 字段来获取。填0为默认项目。
     */
    ProjectId: number;
    /**
     * 实例所属的可用区，例如ap-guangzhou-1。该参数也可以通过调用 DescribeZones 的返回值中的Zone字段来获取。
     */
    Zone: string;
}
/**
 * DescribeInstances请求参数结构体
 */
export interface DescribeInstancesRequest {
    /**
        * 集群筛选策略。取值范围：
  <li>clusterList：表示查询除了已销毁集群之外的集群列表。</li>
  <li>monitorManage：表示查询除了已销毁、创建中以及创建失败的集群之外的集群列表。</li>
  <li>cloudHardwareManage/componentManage：目前这两个取值为预留取值，暂时和monitorManage表示同样的含义。</li>
        */
    DisplayStrategy: string;
    /**
     * 按照一个或者多个实例ID查询。实例ID形如: emr-xxxxxxxx 。(此参数的具体格式可参考API[简介](https://cloud.tencent.com/document/api/213/15688)的 Ids.N 一节)。如果不填写实例ID，返回该APPID下所有实例列表。
     */
    InstanceIds?: Array<string>;
    /**
     * 页编号，默认值为0，表示第一页。
     */
    Offset?: number;
    /**
     * 每页返回数量，默认值为10，最大值为100。
     */
    Limit?: number;
    /**
        * 建议必填-1，表示拉取所有项目下的集群。
  不填默认值为0，表示拉取默认项目下的集群。
  实例所属项目ID。该参数可以通过调用 [DescribeProject](https://cloud.tencent.com/document/api/378/4400) 的返回值中的 projectId 字段来获取。
        */
    ProjectId?: number;
    /**
        * 排序字段。取值范围：
  <li>clusterId：表示按照实例ID排序。</li>
  <li>addTime：表示按照实例创建时间排序。</li>
  <li>status：表示按照实例的状态码排序。</li>
        */
    OrderField?: string;
    /**
        * 按照OrderField升序或者降序进行排序。取值范围：
  <li>0：表示降序。</li>
  <li>1：表示升序。</li>默认值为0。
        */
    Asc?: number;
}
/**
 * 用户自建Hive-MetaDB信息
 */
export interface CustomMetaInfo {
    /**
     * 自定义MetaDB的JDBC连接，请以 jdbc:mysql:// 开头
     */
    MetaDataJdbcUrl?: string;
    /**
     * 自定义MetaDB用户名
     */
    MetaDataUser?: string;
    /**
     * 自定义MetaDB密码
     */
    MetaDataPass?: string;
}
/**
 * InquiryPriceUpdateInstance请求参数结构体
 */
export interface InquiryPriceUpdateInstanceRequest {
    /**
        * 变配的时间单位。取值范围：
  <li>s：表示秒。PayMode取值为0时，TimeUnit只能取值为s。</li>
  <li>m：表示月份。PayMode取值为1时，TimeUnit只能取值为m。</li>
        */
    TimeUnit: string;
    /**
        * 变配的时长。结合TimeUnit一起使用。
  <li>TimeUnit为s时，该参数只能填写3600，表示按量计费实例。</li>
  <li>TimeUnit为m时，该参数填写的数字表示包年包月实例的购买时长，如1表示购买一个月</li>
        */
    TimeSpan: number;
    /**
     * 节点变配的目标配置。
     */
    UpdateSpec: UpdateInstanceSettings;
    /**
        * 实例计费模式。取值范围：
  <li>0：表示按量计费。</li>
  <li>1：表示包年包月。</li>
        */
    PayMode: number;
    /**
     * 实例所在的位置。通过该参数可以指定实例所属可用区，所属项目等属性。
     */
    Placement: Placement;
    /**
        * 货币种类。取值范围：
  <li>CNY：表示人民币。</li>
        */
    Currency?: string;
}
/**
 * COS 相关配置
 */
export interface COSSettings {
    /**
     * COS SecretId
     */
    CosSecretId: string;
    /**
     * COS SecrectKey
     */
    CosSecretKey: string;
    /**
     * 日志存储在COS上的路径
     */
    LogOnCosPath?: string;
}
/**
 * 集群实例信息
 */
export interface ClusterInstancesInfo {
    /**
        * ID号
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Id: number;
    /**
        * 集群ID
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ClusterId: string;
    /**
        * 标题
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Ftitle: string;
    /**
        * 集群名
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ClusterName: string;
    /**
        * 地域ID
  注意：此字段可能返回 null，表示取不到有效值。
        */
    RegionId: number;
    /**
        * 地区ID
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ZoneId: number;
    /**
        * 用户APPID
  注意：此字段可能返回 null，表示取不到有效值。
        */
    AppId: number;
    /**
        * 用户UIN
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Uin: string;
    /**
        * 项目Id
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ProjectId: number;
    /**
        * 集群VPCID
  注意：此字段可能返回 null，表示取不到有效值。
        */
    VpcId: number;
    /**
        * 子网ID
  注意：此字段可能返回 null，表示取不到有效值。
        */
    SubnetId: number;
    /**
        * 实例的状态码。取值范围：
  <li>2：表示集群运行中。</li>
  <li>3：表示集群创建中。</li>
  <li>4：表示集群扩容中。</li>
  <li>5：表示集群增加router节点中。</li>
  <li>6：表示集群安装组件中。</li>
  <li>7：表示集群执行命令中。</li>
  <li>8：表示重启服务中。</li>
  <li>9：表示进入维护中。</li>
  <li>10：表示服务暂停中。</li>
  <li>11：表示退出维护中。</li>
  <li>12：表示退出暂停中。</li>
  <li>13：表示配置下发中。</li>
  <li>14：表示销毁集群中。</li>
  <li>15：表示销毁core节点中。</li>
  <li>16：销毁task节点中。</li>
  <li>17：表示销毁router节点中。</li>
  <li>18：表示更改webproxy密码中。</li>
  <li>19：表示集群隔离中。</li>
  <li>20：表示集群冲正中。</li>
  <li>21：表示集群回收中。</li>
  <li>22：表示变配等待中。</li>
  <li>23：表示集群已隔离。</li>
  <li>24：表示缩容节点中。</li>
  <li>33：表示集群等待退费中。</li>
  <li>34：表示集群已退费。</li>
  <li>301：表示创建失败。</li>
  <li>302：表示扩容失败。</li>
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Status: number;
    /**
        * 添加时间
  注意：此字段可能返回 null，表示取不到有效值。
        */
    AddTime: string;
    /**
        * 已经运行时间
  注意：此字段可能返回 null，表示取不到有效值。
        */
    RunTime: string;
    /**
        * 集群产品配置信息
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Config: EmrProductConfigOutter;
    /**
        * 主节点外网IP
  注意：此字段可能返回 null，表示取不到有效值。
        */
    MasterIp: string;
    /**
        * EMR版本
  注意：此字段可能返回 null，表示取不到有效值。
        */
    EmrVersion: string;
    /**
        * 收费类型
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ChargeType: number;
    /**
        * 交易版本
  注意：此字段可能返回 null，表示取不到有效值。
        */
    TradeVersion: number;
    /**
        * 资源订单ID
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ResourceOrderId: number;
    /**
        * 是否计费集群
  注意：此字段可能返回 null，表示取不到有效值。
        */
    IsTradeCluster: number;
    /**
        * 集群错误状态告警信息
  注意：此字段可能返回 null，表示取不到有效值。
        */
    AlarmInfo: string;
    /**
        * 是否采用新架构
  注意：此字段可能返回 null，表示取不到有效值。
        */
    IsWoodpeckerCluster: number;
    /**
        * 元数据库信息
  注意：此字段可能返回 null，表示取不到有效值。
        */
    MetaDb: string;
    /**
        * 标签信息
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Tags: Array<Tag>;
    /**
        * Hive元数据信息
  注意：此字段可能返回 null，表示取不到有效值。
        */
    HiveMetaDb: string;
    /**
        * 集群类型:EMR,CLICKHOUSE,DRUID
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ServiceClass: string;
    /**
        * 集群所有节点的别名序列化
  注意：此字段可能返回 null，表示取不到有效值。
        */
    AliasInfo: string;
    /**
        * 集群版本Id
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ProductId: number;
}
/**
 * 多云盘参数
 */
export interface MultiDisk {
    /**
     * 云盘类型("CLOUD_PREMIUM","CLOUD_SSD","CLOUD_BASIC")的一种
     */
    DiskType?: string;
    /**
     * 云盘大小
     */
    Volume?: number;
    /**
     * 该类型云盘个数
     */
    Count?: number;
}
/**
 * 搜索字段
 */
export interface SearchItem {
    /**
     * 支持搜索的类型
     */
    SearchType: string;
    /**
     * 支持搜索的值
     */
    SearchValue: string;
}
/**
 * InquiryPriceScaleOutInstance返回参数结构体
 */
export interface InquiryPriceScaleOutInstanceResponse {
    /**
        * 原价，单位为元。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    OriginalCost?: string;
    /**
        * 折扣价，单位为元。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    DiscountCost?: string;
    /**
        * 扩容的时间单位。取值范围：
  <li>s：表示秒。</li>
  <li>m：表示月份。</li>
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Unit?: string;
    /**
        * 询价的节点规格。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    PriceSpec?: PriceResource;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 资源详情
 */
export interface OutterResource {
    /**
        * 规格
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Spec: string;
    /**
        * 规格名
  注意：此字段可能返回 null，表示取不到有效值。
        */
    SpecName: string;
    /**
        * 硬盘类型
  注意：此字段可能返回 null，表示取不到有效值。
        */
    StorageType: number;
    /**
        * 硬盘类型
  注意：此字段可能返回 null，表示取不到有效值。
        */
    DiskType: string;
    /**
        * 系统盘大小
  注意：此字段可能返回 null，表示取不到有效值。
        */
    RootSize: number;
    /**
        * 内存大小
  注意：此字段可能返回 null，表示取不到有效值。
        */
    MemSize: number;
    /**
        * CPU个数
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Cpu: number;
    /**
        * 硬盘大小
  注意：此字段可能返回 null，表示取不到有效值。
        */
    DiskSize: number;
    /**
        * 规格
  注意：此字段可能返回 null，表示取不到有效值。
        */
    InstanceType: string;
}
/**
 * 变配资源规格
 */
export interface UpdateInstanceSettings {
    /**
     * 内存容量，单位为G
     */
    Memory: number;
    /**
     * CPU核数
     */
    CPUCores: number;
    /**
     * 机器资源ID（EMR测资源标识）
     */
    ResourceId: string;
    /**
     * 变配机器规格
     */
    InstanceType?: string;
}
/**
 * TerminateTasks返回参数结构体
 */
export interface TerminateTasksResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeClusterNodes返回参数结构体
 */
export interface DescribeClusterNodesResponse {
    /**
     * 查询到的节点总数
     */
    TotalCnt?: number;
    /**
        * 节点详细信息列表
  注意：此字段可能返回 null，表示取不到有效值。
        */
    NodeList?: Array<NodeHardwareInfo>;
    /**
        * 用户所有的标签键列表
  注意：此字段可能返回 null，表示取不到有效值。
        */
    TagKeys?: Array<string>;
    /**
        * 资源类型列表
  注意：此字段可能返回 null，表示取不到有效值。
        */
    HardwareResourceTypeList?: Array<string>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 节点硬件信息
 */
export interface NodeHardwareInfo {
    /**
        * 用户APPID
  注意：此字段可能返回 null，表示取不到有效值。
        */
    AppId: number;
    /**
        * 序列号
  注意：此字段可能返回 null，表示取不到有效值。
        */
    SerialNo: string;
    /**
        * 机器实例ID
  注意：此字段可能返回 null，表示取不到有效值。
        */
    OrderNo: string;
    /**
        * master节点绑定外网IP
  注意：此字段可能返回 null，表示取不到有效值。
        */
    WanIp: string;
    /**
        * 节点类型。0:common节点；1:master节点
  ；2:core节点；3:task节点
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Flag: number;
    /**
        * 节点规格
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Spec: string;
    /**
        * 节点核数
  注意：此字段可能返回 null，表示取不到有效值。
        */
    CpuNum: number;
    /**
        * 节点内存
  注意：此字段可能返回 null，表示取不到有效值。
        */
    MemSize: number;
    /**
        * 节点内存描述
  注意：此字段可能返回 null，表示取不到有效值。
        */
    MemDesc: string;
    /**
        * 节点所在region
  注意：此字段可能返回 null，表示取不到有效值。
        */
    RegionId: number;
    /**
        * 节点所在Zone
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ZoneId: number;
    /**
        * 申请时间
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ApplyTime: string;
    /**
        * 释放时间
  注意：此字段可能返回 null，表示取不到有效值。
        */
    FreeTime: string;
    /**
        * 硬盘大小
  注意：此字段可能返回 null，表示取不到有效值。
        */
    DiskSize: string;
    /**
        * 节点描述
  注意：此字段可能返回 null，表示取不到有效值。
        */
    NameTag: string;
    /**
        * 节点部署服务
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Services: string;
    /**
        * 磁盘类型
  注意：此字段可能返回 null，表示取不到有效值。
        */
    StorageType: number;
    /**
        * 系统盘大小
  注意：此字段可能返回 null，表示取不到有效值。
        */
    RootSize: number;
    /**
        * 付费类型
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ChargeType: number;
    /**
        * 数据库IP
  注意：此字段可能返回 null，表示取不到有效值。
        */
    CdbIp: string;
    /**
        * 数据库端口
  注意：此字段可能返回 null，表示取不到有效值。
        */
    CdbPort: number;
    /**
        * 硬盘容量
  注意：此字段可能返回 null，表示取不到有效值。
        */
    HwDiskSize: number;
    /**
        * 硬盘容量描述
  注意：此字段可能返回 null，表示取不到有效值。
        */
    HwDiskSizeDesc: string;
    /**
        * 内存容量
  注意：此字段可能返回 null，表示取不到有效值。
        */
    HwMemSize: number;
    /**
        * 内存容量描述
  注意：此字段可能返回 null，表示取不到有效值。
        */
    HwMemSizeDesc: string;
    /**
        * 过期时间
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ExpireTime: string;
    /**
        * 节点资源ID
  注意：此字段可能返回 null，表示取不到有效值。
        */
    EmrResourceId: string;
    /**
        * 续费标志
  注意：此字段可能返回 null，表示取不到有效值。
        */
    IsAutoRenew: number;
    /**
        * 设备标识
  注意：此字段可能返回 null，表示取不到有效值。
        */
    DeviceClass: string;
    /**
        * 支持变配
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Mutable: number;
    /**
        * 多云盘
  注意：此字段可能返回 null，表示取不到有效值。
        */
    MCMultiDisk: Array<MultiDiskMC>;
    /**
        * 数据库信息
  注意：此字段可能返回 null，表示取不到有效值。
        */
    CdbNodeInfo: CdbInfo;
    /**
        * 内网IP
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Ip: string;
    /**
        * 此节点是否可销毁，1可销毁，0不可销毁
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Destroyable: number;
    /**
        * 节点绑定的标签
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Tags: Array<Tag>;
    /**
        * 是否是自动扩缩容节点，0为普通节点，1为自动扩缩容节点。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    AutoFlag: number;
    /**
        * 资源类型, host/pod
  注意：此字段可能返回 null，表示取不到有效值。
        */
    HardwareResourceType: string;
}
/**
 * InquiryPriceUpdateInstance返回参数结构体
 */
export interface InquiryPriceUpdateInstanceResponse {
    /**
        * 原价，单位为元。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    OriginalCost?: number;
    /**
        * 折扣价，单位为元。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    DiscountCost?: number;
    /**
        * 变配的时间单位。取值范围：
  <li>s：表示秒。</li>
  <li>m：表示月份。</li>
  注意：此字段可能返回 null，表示取不到有效值。
        */
    TimeUnit?: string;
    /**
        * 变配的时长。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    TimeSpan?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 资源描述
 */
export interface NewResourceSpec {
    /**
     * 描述Master节点资源
     */
    MasterResourceSpec?: Resource;
    /**
     * 描述Core节点资源
     */
    CoreResourceSpec?: Resource;
    /**
     * 描述Task节点资源
     */
    TaskResourceSpec?: Resource;
    /**
     * Master节点数量
     */
    MasterCount?: number;
    /**
     * Core节点数量
     */
    CoreCount?: number;
    /**
     * Task节点数量
     */
    TaskCount?: number;
    /**
     * 描述Common节点资源
     */
    CommonResourceSpec?: Resource;
    /**
     * Common节点数量
     */
    CommonCount?: number;
}
/**
 * Pod PVC存储方式描述
 */
export interface PersistentVolumeContext {
    /**
        * 磁盘大小，单位为GB。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    DiskSize?: number;
    /**
        * 磁盘类型。CLOUD_PREMIUM;CLOUD_SSD
  注意：此字段可能返回 null，表示取不到有效值。
        */
    DiskType?: string;
}
/**
 * InquiryPriceRenewInstance请求参数结构体
 */
export interface InquiryPriceRenewInstanceRequest {
    /**
     * 实例续费的时长。需要结合TimeUnit一起使用。1表示续费1一个月
     */
    TimeSpan: number;
    /**
     * 待续费节点的资源ID列表。资源ID形如：emr-vm-xxxxxxxx。有效的资源ID可通过登录[控制台](https://console.cloud.tencent.com/emr/static/hardware)查询。
     */
    ResourceIds: Array<string>;
    /**
     * 实例所在的位置。通过该参数可以指定实例所属可用区，所属项目等属性。
     */
    Placement: Placement;
    /**
     * 实例计费模式。此处只支持取值为1，表示包年包月。
     */
    PayMode: number;
    /**
        * 实例续费的时间单位。取值范围：
  <li>m：表示月份。</li>
        */
    TimeUnit?: string;
    /**
        * 货币种类。取值范围：
  <li>CNY：表示人民币。</li>
        */
    Currency?: string;
}
/**
 * 出参
 */
export interface CdbInfo {
    /**
        * 数据库实例
  注意：此字段可能返回 null，表示取不到有效值。
        */
    InstanceName: string;
    /**
        * 数据库IP
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Ip: string;
    /**
        * 数据库端口
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Port: number;
    /**
        * 数据库内存规格
  注意：此字段可能返回 null，表示取不到有效值。
        */
    MemSize: number;
    /**
        * 数据库磁盘规格
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Volume: number;
    /**
        * 服务标识
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Service: string;
    /**
        * 过期时间
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ExpireTime: string;
    /**
        * 申请时间
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ApplyTime: string;
    /**
        * 付费类型
  注意：此字段可能返回 null，表示取不到有效值。
        */
    PayType: number;
    /**
        * 过期标识
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ExpireFlag: boolean;
    /**
        * 数据库状态
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Status: number;
    /**
        * 续费标识
  注意：此字段可能返回 null，表示取不到有效值。
        */
    IsAutoRenew: number;
    /**
        * 数据库字符串
  注意：此字段可能返回 null，表示取不到有效值。
        */
    SerialNo: string;
    /**
        * ZoneId
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ZoneId: number;
    /**
        * RegionId
  注意：此字段可能返回 null，表示取不到有效值。
        */
    RegionId: number;
}
/**
 * ScaleOutInstance请求参数结构体
 */
export interface ScaleOutInstanceRequest {
    /**
        * 扩容的时间单位。取值范围：
  <li>s：表示秒。PayMode取值为0时，TimeUnit只能取值为s。</li>
  <li>m：表示月份。PayMode取值为1时，TimeUnit只能取值为m。</li>
        */
    TimeUnit: string;
    /**
        * 扩容的时长。结合TimeUnit一起使用。
  <li>TimeUnit为s时，该参数只能填写3600，表示按量计费实例。</li>
  <li>TimeUnit为m时，该参数填写的数字表示包年包月实例的购买时长，如1表示购买一个月</li>
        */
    TimeSpan: number;
    /**
     * 实例ID。
     */
    InstanceId: string;
    /**
        * 实例计费模式。取值范围：
  <li>0：表示按量计费。</li>
  <li>1：表示包年包月。</li>
        */
    PayMode: number;
    /**
     * 客户端Token。
     */
    ClientToken?: string;
    /**
     * 引导操作脚本设置。
     */
    PreExecutedFileSettings?: Array<PreExecuteFileSettings>;
    /**
     * 扩容的Task节点数量。
     */
    TaskCount?: number;
    /**
     * 扩容的Core节点数量。
     */
    CoreCount?: number;
    /**
     * 扩容时不需要安装的进程。
     */
    UnNecessaryNodeList?: Array<number>;
    /**
     * 扩容的Router节点数量。
     */
    RouterCount?: number;
    /**
        * 部署的服务。
  <li>SoftDeployInfo和ServiceNodeInfo是同组参数，和UnNecessaryNodeList参数互斥。</li>
  <li>建议使用SoftDeployInfo和ServiceNodeInfo组合。</li>
        */
    SoftDeployInfo?: Array<number>;
    /**
     * 启动的进程。
     */
    ServiceNodeInfo?: Array<number>;
    /**
     * 分散置放群组ID列表，当前仅支持指定一个。
     */
    DisasterRecoverGroupIds?: Array<string>;
    /**
     * 扩容节点绑定标签列表。
     */
    Tags?: Array<Tag>;
    /**
     * 扩容所选资源类型，可选范围为"host","pod"，host为普通的CVM资源，Pod为TKE集群提供的资源
     */
    HardwareResourceType?: string;
    /**
     * 使用Pod资源扩容时，指定的Pod规格以及来源等信息
     */
    PodSpec?: PodSpec;
}
