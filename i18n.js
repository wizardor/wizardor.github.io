/**
 * PMS Website Multilingual Translation Dictionary & Engine (i18n)
 * Supports 6 Languages: en (Default), zh (Simplified), zh-TW (Traditional), es (Spanish), ja (Japanese), ko (Korean)
 * Fully compliant with PADDLE_COMPLIANCE_SPEC.md (Zero sensitive keywords)
 */

const PMS_TRANSLATIONS = {
  en: {
    // Navigation
    nav_overview: "Overview",
    nav_pricing: "Pricing",
    nav_terms: "Terms",
    nav_privacy: "Privacy",
    nav_refunds: "Refunds",
    
    // Index Hero
    hero_badge: "Cloud Document Productivity SaaS",
    hero_title: "Cloud Document & Citation Formatting Platform",
    hero_desc: "PMS is an enterprise cloud SaaS workbench designed for researchers, academic scholars, and technical authors. It streamlines complex document compilation, citation referencing, bibliographic indexing, and publication-ready vector PDF rendering.",
    btn_view_pricing: "View Pricing & Plans →",
    btn_terms: "Terms of Service",

    // Index 3 Pillars
    pillar1_title: "Citation & Bibliography Indexing",
    pillar1_desc: "Automate multi-section tables of contents, document bookmarking, sequential pagination, and academic citation reference tables with strict formatting accuracy.",
    pillar2_title: "Cloud Compilation Engine",
    pillar2_desc: "High-performance server-side rendering pipelines compile multi-source materials—papers, certificates, and large data tables—into publication-grade vector PDFs.",
    pillar3_title: "Encrypted Cloud Storage",
    pillar3_desc: "All authorized user assets and active projects are securely processed and stored in enterprise-grade encrypted cloud infrastructure with strict access isolation.",

    // Index MoR Banner
    mor_badge: "Global Merchant of Record (MoR)",
    mor_title: "Safe, Compliant Billing Powered by Paddle",
    mor_desc: "All financial transactions for PMS licenses are handled securely by Paddle (Paddle Payments Ltd / Paddle.com Market Ltd). Paddle acts as our Merchant of Record, managing international tax, PCI-DSS Level 1 payment security, and buyer protection.",
    mor_feat1: "Enterprise Cloud Security",
    mor_feat2: "PCI-DSS Level 1 Certified",
    mor_feat3: "Instant License Provisioning",

    // Pricing Header
    pricing_badge: "Secured by Paddle Merchant of Record (MoR) · PCI-DSS Level 1 Security",
    pricing_title: "Transparent Pricing for Professional Document Compilation",
    pricing_desc: "Designed for researchers, scholars, and technical authors. All Pro subscriptions feature 100% credit deduction towards lifetime passes.",
    
    // Billing Cycles
    cycle_monthly: "Monthly",
    cycle_quarterly: "Quarterly",
    cycle_yearly: "Annual",
    badge_recommended: "Recommended",
    badge_save57: "Save 57%",

    // Card 1: Starter
    card1_tier: "STARTER",
    card1_title: "⚡ Pro Studio",
    card1_desc: "Document structuring, citation concordance & draft previews.",
    card1_period_mo: "/month",
    card1_period_qu: "/quarter",
    card1_period_yr: "/year",
    card1_sub: "100% deductible towards buyout",
    card1_f1: "Up to 3 active document projects",
    card1_f2: "Citation indexing & TOC builder",
    card1_f3: "Formatted document draft previews",
    card1_btn: "Subscribe Starter",

    // Card 2: Single-Project Pass
    card2_banner: "★ Most Popular for Authors",
    card2_tier: "PRO FLAGSHIP",
    card2_title: "🌟 Single-Project Pass",
    card2_desc: "End-to-end document compilation and PDF export for 1 primary project.",
    card2_period: "One-time",
    card2_sub: "Instant digital license provisioning",
    card2_f1: "Unlimited document compilation & updates",
    card2_f2: "High-resolution vector PDF export",
    card2_f3: "Automatic pagination & bookmarking",
    card2_f4: "Lifetime license for 1 project scope",
    card2_btn: "Get Lifetime Pass",

    // Card 3: Team Studio
    card3_tier: "ORGANIZATION",
    card3_title: "👥 Team Studio",
    card3_desc: "Multi-user collaborative workbench for professional documentation teams.",
    card3_period_mo: "/month",
    card3_period_qu: "/quarter",
    card3_period_yr: "/year",
    card3_sub: "Includes 5 Seats & 50 Active Projects",
    card3_f1: "5 Concurrent team/collaborator seats",
    card3_f2: "50 Active documentation projects",
    card3_f3: "Encrypted cloud project storage isolation",
    card3_f4: "Priority email technical support",
    card3_btn: "Subscribe Team",

    // Card 4: Enterprise
    card4_tier: "ENTERPRISE",
    card4_title: "🏢 Enterprise Custom",
    card4_desc: "Custom corporate contract with enterprise SLAs and invoicing.",
    card4_price: "Contact Sales",
    card4_sub: "Custom Quotas & Procurement",
    card4_f1: "Unlimited custom user seats",
    card4_f2: "Corporate software license & evaluation agreements",
    card4_f3: "Direct corporate wire bank transfers",
    card4_btn: "Contact Sales",

    // Pricing Guarantees
    guar1_title: "Instant Digital Delivery",
    guar1_desc: "License keys and compute resource quotas are provisioned automatically within seconds of completed checkout.",
    guar2_title: "100% Pro Payment Credit",
    guar2_desc: "100% of accumulated Pro subscription payments are credited towards the purchase of a Lifetime Pass at any time.",
    guar3_title: "Read-Only Asset Custody",
    guar3_desc: "If your subscription expires, all previously compiled documents and PDF assets remain permanently available to view and download.",

    // Footer
    footer_rights: "© 2026 PMS Software Studio. All rights reserved.",
    footer_support: "Contact Support:",
    footer_mor_title: "Merchant of Record Disclosure:",
    footer_mor_desc: "Payments and order fulfillment are processed securely by our Merchant of Record, Paddle.com Market Ltd or Paddle Payments Ltd. Paddle handles international sales tax, VAT, and global payment compliance."
  },

  zh: {
    // 导航
    nav_overview: "产品总览",
    nav_pricing: "定价套餐",
    nav_terms: "服务条款",
    nav_privacy: "隐私政策",
    nav_refunds: "退款政策",

    // 首页 Hero
    hero_badge: "云端专业文档与学术排版 SaaS",
    hero_title: "云端专业文档排版与文献引文索引平台",
    hero_desc: "PMS 是专为科研学者、工程技术作者打造的企业级云端工作台，深度支持复杂材料汇总、多源文献引文索引、目录自动标引与出版级矢量 PDF 编译输出。",
    btn_view_pricing: "查看定价方案 →",
    btn_terms: "服务条款",

    // 首页三大支柱
    pillar1_title: "引文自动标引与目录索引",
    pillar1_desc: "全自动构建多章节目录索引、文档书签层级、连续页码编排及高精度文献规范引用表。",
    pillar2_title: "云端矢量编译引擎",
    pillar2_desc: "高性能服务端渲染流水线，将论文底稿、证明凭单及大型表格批量编译为高分辨率出版级矢量 PDF。",
    pillar3_title: "高强度云端加密存储",
    pillar3_desc: "所有用户资产与文档项目均在企业级加密云端沙箱中处理与持久化，保障数据绝对隔离。",

    // 首页 MoR 横幅
    mor_badge: "全球名义商家 (Merchant of Record)",
    mor_title: "由 Paddle 提供银行级合规安全结算",
    mor_desc: "PMS 全球软件授权由英国知名支付商 Paddle (Paddle Payments Ltd / Paddle.com Market Ltd) 作为名义商家处理，依法代收代缴跨国税费，提供 PCI-DSS Level 1 金融级交易安全保障。",
    mor_feat1: "企业级云端安全",
    mor_feat2: "PCI-DSS Level 1 国际认证",
    mor_feat3: "授权码即时自动下发",

    // 定价头部
    pricing_badge: "由 Paddle 名义商家 (MoR) 承保 · PCI-DSS Level 1 银行级安全保障",
    pricing_title: "透明清晰的专业文档排版编译定价",
    pricing_desc: "专为科研人员、工程学者及专业作者设计。所有个人订阅款均可 100% 全额冲抵买断套餐。",

    // 计费周期
    cycle_monthly: "按月订阅",
    cycle_quarterly: "按季订阅",
    cycle_yearly: "按年订阅",
    badge_recommended: "官方推荐",
    badge_save57: "省 57%",

    // 卡片 1: 入门版
    card1_tier: "个人起步",
    card1_title: "⚡ Pro 个人工作室",
    card1_desc: "适用于文档结构化整理、引文一致性比对与格式草案预览。",
    card1_period_mo: "/月",
    card1_period_qu: "/季度",
    card1_period_yr: "/年",
    card1_sub: "已付订阅款 100% 冲抵终身买断",
    card1_f1: "支持同时活跃维护 3 个文档项目",
    card1_f2: "引文目录构建与自动书签工具",
    card1_f3: "格式化排版草稿实时预览",
    card1_btn: "立即订阅个人版",

    // 卡片 2: 终身买断
    card2_banner: "★ 学术作者首选推荐",
    card2_tier: "专业旗舰",
    card2_title: "🌟 单项目终身通行证",
    card2_desc: "针对单个主文档项目的全周期无限次云端编译与高清 PDF 终身导出。",
    card2_period: "单次买断",
    card2_sub: "支付成功即时签发授权密钥",
    card2_f1: "单项目全周期无限次文档重构与更新",
    card2_f2: "超高分辨率矢量 PDF 完整导出",
    card2_f3: "智能连续页码编排与目录跳转",
    card2_f4: "永久锁定 1 个主项目文档范围",
    card2_btn: "获取终身通行证",

    // 卡片 3: 团队工作室
    card3_tier: "团队协同",
    card3_title: "👥 团队协同工作室",
    card3_desc: "专为科研实验室、学术课题组或专业文档团队打造的多席位协作工作台。",
    card3_period_mo: "/月",
    card3_period_qu: "/季度",
    card3_period_yr: "/年",
    card3_sub: "包含 5 个协作者工位与 50 个项目容量",
    card3_f1: "5 个并发团队成员/编辑席位",
    card3_f2: "50 个活跃文档项目配额",
    card3_f3: "企业级项目存储沙箱隔离",
    card3_f4: "专属高优先级邮件技术支持",
    card3_btn: "订阅团队版",

    // 卡片 4: 企业定制
    card4_tier: "企业定制",
    card4_title: "🏢 企业级定制方案",
    card4_desc: "针对大型机构、高校院所或涉外文档部门的大规模定制协议与开票支持。",
    card4_price: "联系销售",
    card4_sub: "定制席位配额与企业采购支持",
    card4_f1: "无限自定义协作者工位配额",
    card4_f2: "企业级软件授权与评估专属协议",
    card4_f3: "支持线下企业公对公电汇支付",
    card4_btn: "联系商务团队",

    // 定价保障
    guar1_title: "即时数字交付",
    guar1_desc: "付款成功后，授权密钥与云端算力配额在几秒内自动签发下达。",
    guar2_title: "100% 订阅冲抵机制",
    guar2_desc: "此前累计支付的所有 Pro 订阅款项，均可在任何时候 100% 抵扣终身买断款。",
    guar3_title: "永久只读托管保障",
    guar3_desc: "订阅期满即便未续费，此前已编译好的所有文档与 PDF 资产终身免费可查、可下载。",

    // 页脚
    footer_rights: "© 2026 PMS 软件工作室。保留所有权利。",
    footer_support: "技术支持邮箱：",
    footer_mor_title: "名义商家官方说明：",
    footer_mor_desc: "支付与订单履约由名义商家 Paddle.com Market Ltd 或 Paddle Payments Ltd 安全处理。Paddle 负责跨国消费税申报、增值税缴纳及全球合规结算。"
  },

  "zh-TW": {
    // 導航
    nav_overview: "產品總覽",
    nav_pricing: "定價方案",
    nav_terms: "服務條款",
    nav_privacy: "隱私權政策",
    nav_refunds: "退款政策",

    // 首頁 Hero
    hero_badge: "雲端專業文檔與學術排版 SaaS",
    hero_title: "雲端專業文檔排版與文獻引文索引平台",
    hero_desc: "PMS 是專為科研學者、工程技術作者打造的企業級雲端工作台，深度支援複雜文檔彙整、多源引文索引、目錄自動標引與出版級向量 PDF 編譯輸出。",
    btn_view_pricing: "查看定價方案 →",
    btn_terms: "服務條款",

    // 首頁三大支柱
    pillar1_title: "引文自動標引與目錄索引",
    pillar1_desc: "全自動構建多章節目錄索引、文檔書籤層級、連續頁碼編排及高精度文獻規範引用表。",
    pillar2_title: "雲端向量編譯引擎",
    pillar2_desc: "高性能伺服端渲染管線，將論文底稿、證明檔案及大型表格批次編譯為高解析度出版級向量 PDF。",
    pillar3_title: "高強度雲端加密存儲",
    pillar3_desc: "所有使用者資產與文檔專案均在企業級加密雲端沙箱中處理與持久化，保障資料絕對隔離。",

    // 首頁 MoR 橫幅
    mor_badge: "全球名義商家 (Merchant of Record)",
    mor_title: "由 Paddle 提供銀行級合規安全結算",
    mor_desc: "PMS 全球軟體授權由英國知名支付商 Paddle 作為名義商家處理，依法代收代繳跨國稅費，提供 PCI-DSS Level 1 金融級交易安全保障。",
    mor_feat1: "企業級雲端安全",
    mor_feat2: "PCI-DSS Level 1 國際認證",
    mor_feat3: "授權碼即時自動下發",

    // 定價頭部
    pricing_badge: "由 Paddle 名義商家 (MoR) 承保 · PCI-DSS Level 1 銀行級安全保障",
    pricing_title: "透明清晰的專業文檔排版編譯定價",
    pricing_desc: "專為科研人員、工程學者及專業作者設計。所有個人訂閱款均可 100% 全額折抵買斷套餐。",

    // 計費週期
    cycle_monthly: "按月訂閱",
    cycle_quarterly: "按季訂閱",
    cycle_yearly: "按年訂閱",
    badge_recommended: "官方推薦",
    badge_save57: "省 57%",

    // 卡片 1
    card1_tier: "個人起步",
    card1_title: "⚡ Pro 個人工作室",
    card1_desc: "適用於文檔結構化整理、引文一致性比對與格式草案預覽。",
    card1_period_mo: "/月",
    card1_period_qu: "/季度",
    card1_period_yr: "/年",
    card1_sub: "已付訂閱款 100% 折抵終身買斷",
    card1_f1: "支援同時維護 3 個文檔專案",
    card1_f2: "引文目錄構建與自動書籤工具",
    card1_f3: "格式化排版草稿即時預覽",
    card1_btn: "立即訂閱個人版",

    // 卡片 2
    card2_banner: "★ 學術作者首選推薦",
    card2_tier: "專業旗艦",
    card2_title: "🌟 單專案終身通行證",
    card2_desc: "針對單個主文檔專案的全週期無限制雲端編譯與高解析度 PDF 終身匯出。",
    card2_period: "單次買斷",
    card2_sub: "支付成功即時簽發授權金鑰",
    card2_f1: "單專案全週期無限制文檔重構與更新",
    card2_f2: "超高解析度向量 PDF 完整匯出",
    card2_f3: "智慧連續頁碼編排與目錄跳轉",
    card2_f4: "永久鎖定 1 個主專案文檔範圍",
    card2_btn: "獲取終身通行證",

    // 卡片 3
    card3_tier: "團隊協同",
    card3_title: "👥 團隊協同工作室",
    card3_desc: "專為研究實驗室、學術課題組或專業文檔團隊打造的多席位協作工作台。",
    card3_period_mo: "/月",
    card3_period_qu: "/季度",
    card3_period_yr: "/年",
    card3_sub: "包含 5 個協作者工位與 50 個專案容量",
    card3_f1: "5 個並發團隊成員/編輯席位",
    card3_f2: "50 個活躍文檔專案配額",
    card3_f3: "企業級專案存儲沙箱隔離",
    card3_f4: "專屬高優先順序郵件技術支援",
    card3_btn: "訂閱團隊版",

    // 卡片 4
    card4_tier: "企業定制",
    card4_title: "🏢 企業級定制方案",
    card4_desc: "針對大型機構、大專院校或涉外文檔部門的大規模定制協議與採購支援。",
    card4_price: "聯絡業務",
    card4_sub: "定制席位配額與企業採購支援",
    card4_f1: "無限自定義協作者工位配額",
    card4_f2: "企業級軟體授權與評估專屬協議",
    card4_f3: "支援線下企業公對公電匯支付",
    card4_btn: "聯絡商務團隊",

    // 定價保障
    guar1_title: "即時數位交付",
    guar1_desc: "付款成功後，授權金鑰與雲端運算配額在數秒內自動簽發生效。",
    guar2_title: "100% 訂閱折抵機制",
    guar2_desc: "此前累積支付的所有 Pro 訂閱款項，均可在任何時候 100% 折抵終身買斷款。",
    guar3_title: "永久唯讀託管保障",
    guar3_desc: "訂閱期滿即便未續約，此前已編譯好的所有文檔與 PDF 資產終身免費可查、可下載。",

    // 頁尾
    footer_rights: "© 2026 PMS 軟體工作室。保留所有權利。",
    footer_support: "技術支援信箱：",
    footer_mor_title: "名義商家官方說明：",
    footer_mor_desc: "支付與訂單履約由名義商家 Paddle.com Market Ltd 或 Paddle Payments Ltd 安全處理。Paddle 負責跨國消費稅申報、加值稅繳納及全球合規結算。"
  },

  es: {
    // Navegación
    nav_overview: "Descripción",
    nav_pricing: "Precios",
    nav_terms: "Términos",
    nav_privacy: "Privacidad",
    nav_refunds: "Reembolsos",

    // Hero
    hero_badge: "SaaS de Productividad Documental en la Nube",
    hero_title: "Plataforma de Formato de Documentos y Citas en la Nube",
    hero_desc: "PMS es un entorno de trabajo SaaS en la nube diseñado para investigadores y autores técnicos. Agiliza la compilación de documentos, el formato de citas bibliográficas y la generación de archivos PDF vectoriales listos para publicar.",
    btn_view_pricing: "Ver Planes y Precios →",
    btn_terms: "Términos de Servicio",

    // 3 Pilares
    pillar1_title: "Indexación de Citas y Bibliografía",
    pillar1_desc: "Automatice tablas de contenido multisección, marcadores, numeración secuencial y tablas de referencias con absoluta precisión.",
    pillar2_title: "Motor de Compilación en la Nube",
    pillar2_desc: "Procesamiento de renderizado de alto rendimiento para compilar artículos, certificados y tablas de datos en archivos PDF vectoriales de alta resolución.",
    pillar3_title: "Almacenamiento Seguro en la Nube",
    pillar3_desc: "Todos los proyectos y documentos se procesan y almacenan de forma segura bajo cifrado de nivel empresarial y estricto aislamiento de acceso.",

    // MoR Banner
    mor_badge: "Comerciante Registrado Global (MoR)",
    mor_title: "Facturación Segura y Conforme a la Ley por Paddle",
    mor_desc: "Todas las transacciones de licencias de PMS son procesadas de forma segura por Paddle (Paddle Payments Ltd / Paddle.com Market Ltd), gestionando impuestos internacionales, seguridad bancaria PCI-DSS Nivel 1 y protección al comprador.",
    mor_feat1: "Seguridad Cloud Empresarial",
    mor_feat2: "Certificado PCI-DSS Nivel 1",
    mor_feat3: "Entrega Inmediata de Licencia",

    // Encabezado de Precios
    pricing_badge: "Asegurado por Paddle Merchant of Record (MoR) · Seguridad PCI-DSS Nivel 1",
    pricing_title: "Precios Transparentes para la Compilación Profesional",
    pricing_desc: "Diseñado para investigadores y académicos. Todas las suscripciones Pro son 100% deducibles al adquirir un pase de por vida.",

    // Ciclos
    cycle_monthly: "Mensual",
    cycle_quarterly: "Trimestral",
    cycle_yearly: "Anual",
    badge_recommended: "Recomendado",
    badge_save57: "Ahorra 57%",

    // Tarjeta 1
    card1_tier: "INICIAL",
    card1_title: "⚡ Pro Studio",
    card1_desc: "Estructuración de documentos, concordancia de citas y vista previa de borradores.",
    card1_period_mo: "/mes",
    card1_period_qu: "/trimestre",
    card1_period_yr: "/año",
    card1_sub: "100% deducible para compra definitiva",
    card1_f1: "Hasta 3 proyectos activos concurrentes",
    card1_f2: "Generador de índices de citas y TOC",
    card1_f3: "Vista previa de borradores formateados",
    card1_btn: "Suscribirse a Starter",

    // Tarjeta 2
    card2_banner: "★ Más Popular para Autores",
    card2_tier: "PRO FLAGSHIP",
    card2_title: "🌟 Pase de Proyecto Único",
    card2_desc: "Compilación integral de documentos y exportación PDF para 1 proyecto principal.",
    card2_period: "Pago único",
    card2_sub: "Aprovisionamiento digital inmediato",
    card2_f1: "Compilación y actualizaciones ilimitadas",
    card2_f2: "Exportación a PDF vectorial de alta resolución",
    card2_f3: "Paginación automática y marcadores inteligentes",
    card2_f4: "Licencia de por vida para 1 proyecto",
    card2_btn: "Obtener Pase de por Vida",

    // Tarjeta 3
    card3_tier: "ORGANIZACIÓN",
    card3_title: "👥 Team Studio",
    card3_desc: "Entorno de colaboración para equipos profesionales de documentación.",
    card3_period_mo: "/mes",
    card3_period_qu: "/trimestre",
    card3_period_yr: "/año",
    card3_sub: "Incluye 5 puestos y 50 proyectos activos",
    card3_f1: "5 Puestos concurrentes para el equipo",
    card3_f2: "50 Proyectos de documentación activos",
    card3_f3: "Aislamiento de almacenamiento cloud seguro",
    card3_f4: "Soporte técnico prioritario por email",
    card3_btn: "Suscribirse a Team",

    // Tarjeta 4
    card4_tier: "EMPRESA",
    card4_title: "🏢 Enterprise Personalizado",
    card4_desc: "Acuerdos corporativos a medida con ANS empresariales y facturación directa.",
    card4_price: "Contactar Ventas",
    card4_sub: "Cuotas personalizadas y compras corporativas",
    card4_f1: "Puestos de usuario ilimitados",
    card4_f2: "Contratos corporativos de licencia de software",
    card4_f3: "Transferencia bancaria directa corporativa",
    card4_btn: "Contactar Ventas",

    // Garantías
    guar1_title: "Entrega Digital Instantánea",
    guar1_desc: "Las claves de licencia se activan en cuestión de segundos tras completar el pago.",
    guar2_title: "Crédito Pro 100%",
    guar2_desc: "El 100% de los pagos Pro acumulados se descuentan al comprar un Pase de por Vida.",
    guar3_title: "Custodia de Solo Lectura",
    guar3_desc: "Si expira la suscripción, todos sus documentos y archivos PDF creados permanecen accesibles para ver y descargar.",

    // Pie
    footer_rights: "© 2026 PMS Software Studio. Todos los derechos reservados.",
    footer_support: "Soporte técnico:",
    footer_mor_title: "Aviso de Merchant of Record:",
    footer_mor_desc: "Los pagos y el procesamiento de pedidos son gestionados de forma segura por nuestro Merchant of Record, Paddle.com Market Ltd o Paddle Payments Ltd."
  },

  ja: {
    // ナビゲーション
    nav_overview: "概要",
    nav_pricing: "料金プラン",
    nav_terms: "利用規約",
    nav_privacy: "プライバシー",
    nav_refunds: "返金ポリシー",

    // Hero
    hero_badge: "クラウド文書作成・学術組版 SaaS",
    hero_title: "クラウド文書組版・引用文献インデックスプラットフォーム",
    hero_desc: "PMS は研究者、学者、技術文書作成者向けのエンタープライズクラウドワークベンチです。複雑な文献の編纂、引用文献インデックス、自動目次生成、出版品質のベクター PDF 出力を効率化します。",
    btn_view_pricing: "料金プランを見る →",
    btn_terms: "利用規約",

    // 3つの柱
    pillar1_title: "引用文献と目次の自動インデックス",
    pillar1_desc: "複数セクションの目次、ブックマーク階層、連続ページ番号、正確な引用文献テーブルを全自動で生成します。",
    pillar2_title: "クラウドベクターコンパイルエンジン",
    pillar2_desc: "論文原稿やデータテーブルを高解像度で出版品質のベクター PDF へ高速サーバー側でレンダリング・出力します。",
    pillar3_title: "高セキュリティクラウド暗号化保存",
    pillar3_desc: "すべてのユーザー資産とプロジェクトは、エンタープライズグレードの暗号化クラウド基盤で安全に処理・保護されます。",

    // MoR バナー
    mor_badge: "グローバル公認販売代理店 (Merchant of Record)",
    mor_title: "Paddle による銀行水準の安全・適法な決済",
    mor_desc: "PMS のライセンス決済はすべて、英国 Paddle (Paddle Payments Ltd / Paddle.com Market Ltd) が販売代理店として安全に処理し、国際消費税の申告、PCI-DSS レベル 1 の決済保護を提供します。",
    mor_feat1: "企業レベルのクラウドセキュリティ",
    mor_feat2: "PCI-DSS レベル 1 国際認証",
    mor_feat3: "決済完了後ライセンス即時発行",

    // 料金ヘッダー
    pricing_badge: "Paddle Merchant of Record 保証 · PCI-DSS レベル 1 セキュリティ",
    pricing_title: "プロフェッショナル文書編纂のための明確な料金体系",
    pricing_desc: "研究者や学者向けに設計。Pro プランのお支払い実績は、ライフタイムパス購入時に 100% 全額充当・割引されます。",

    // 周期
    cycle_monthly: "月額プラン",
    cycle_quarterly: "3ヶ月プラン",
    cycle_yearly: "年額プラン",
    badge_recommended: "おすすめ",
    badge_save57: "57% お得",

    // カード 1
    card1_tier: "スターター",
    card1_title: "⚡ Pro スタジオ",
    card1_desc: "文書構造の整理、引用文献の整合性確認、ドラフトのプレビューに最適。",
    card1_period_mo: "/月",
    card1_period_qu: "/3ヶ月",
    card1_period_yr: "/年",
    card1_sub: "支払額の 100% をライフタイム購入に充当可能",
    card1_f1: "最大 3 つのアクティブプロジェクト",
    card1_f2: "引用インデックス＆目次ビルダー",
    card1_f3: "フォーマット済みドラフトプレビュー",
    card1_btn: "Pro プランに登録",

    // カード 2
    card2_banner: "★ 著者に一番人気のプラン",
    card2_tier: "プロフラッグシップ",
    card2_title: "🌟 シングルプロジェクト ライフタイムパス",
    card2_desc: "1 つの主要文書プロジェクトに対する無制限のクラウド編纂と高解像度 PDF 永久出力。",
    card2_period: "一括払い",
    card2_sub: "デジタルライセンス即時発行",
    card2_f1: "無制限の文書編纂・更新",
    card2_f2: "高解像度ベクター PDF エクスポート",
    card2_f3: "自動ページ番号・ブックマーク機能",
    card2_f4: "1 プロジェクトに対する永久ライセンス",
    card2_btn: "ライフタイムパスを取得",

    // カード 3
    card3_tier: "組織・チーム",
    card3_title: "👥 チームスタジオ",
    card3_desc: "専門文書チームや研究室向けの複数席コラボレーションワークベンチ。",
    card3_period_mo: "/月",
    card3_period_qu: "/3ヶ月",
    card3_period_yr: "/年",
    card3_sub: "5 席の共同作業者と 50 プロジェクト枠を含む",
    card3_f1: "5 つの同時チームメンバー席",
    card3_f2: "50 個のアクティブ文書プロジェクト枠",
    card3_f3: "暗号化クラウドストレージの完全隔離",
    card3_f4: "優先メール技術サポート",
    card3_btn: "チームプランに登録",

    // カード 4
    card4_tier: "エンタープライズ",
    card4_title: "🏢 エンタープライズカスタム",
    card4_desc: "大規模機関向けのカスタム契約、SLA、請求書払い対応。",
    card4_price: "営業に問い合わせ",
    card4_sub: "カスタム枠と企業調達サポート",
    card4_f1: "無制限のカスタム席枠",
    card4_f2: "企業向けソフトウェアライセンス契約",
    card4_f3: "企業間銀行振込対応",
    card4_btn: "営業窓口へ連絡",

    // 保証
    guar1_title: "即時デジタル発行",
    guar1_desc: "決済完了から数秒以内にライセンスキーとクラウドリソースが自動発行されます。",
    guar2_title: "100% 充当クレジット",
    guar2_desc: "Pro サブスクリプションでお支払いいただいた金額は、いつでも 100% ライフタイム購入に充当できます。",
    guar3_title: "永久閲覧権の保証",
    guar3_desc: "サブスクリプション終了後も、過去に作成・編纂した文書や PDF は永久に閲覧・ダウンロード可能です。",

    // フッター
    footer_rights: "© 2026 PMS Software Studio. All rights reserved.",
    footer_support: "技術サポート:",
    footer_mor_title: "公認販売代理店 (MoR) に関する表記:",
    footer_mor_desc: "決済および注文処理は、公認販売代理店である Paddle.com Market Ltd または Paddle Payments Ltd によって安全に行われます。"
  },

  ko: {
    // 내비게이션
    nav_overview: "개요",
    nav_pricing: "요금제",
    nav_terms: "이용약관",
    nav_privacy: "개인정보처리방침",
    nav_refunds: "환불정책",

    // Hero
    hero_badge: "클라우드 전문 문서 및 학술 조판 SaaS",
    hero_title: "클라우드 전문 문서 조판 및 인용 색인 플랫폼",
    hero_desc: "PMS는 연구자, 학자, 기술 저자를 위해 설계된 엔터프라이즈 클라우드 워크벤치입니다. 복잡한 자료 취합, 다중 인용 색인, 목차 자동 생성 및 출판 품질의 벡터 PDF 렌더링을 지원합니다.",
    btn_view_pricing: "요금제 보기 →",
    btn_terms: "이용약관",

    // 3대 핵심 기둥
    pillar1_title: "인용 및 참고문헌 자동 색인",
    pillar1_desc: "다중 섹션 목차, 북마크 계층, 연속 페이지 번호 매기기 및 정확한 인용 참고표를 전자동으로 구성합니다.",
    pillar2_title: "클라우드 벡터 컴파일 엔진",
    pillar2_desc: "원고, 인증서, 대규모 데이터 표를 고해상도 출판 품질의 벡터 PDF로 렌더링하는 고성능 서버 파이프라인입니다.",
    pillar3_title: "엔터프라이즈 클라우드 암호화 저장소",
    pillar3_desc: "모든 사용자 자산과 프로젝트는 철저한 격리 환경의 엔터프라이즈급 암호화 인프라에서 안전하게 처리됩니다.",

    // MoR 배너
    mor_badge: "글로벌 공인 판매자 (Merchant of Record)",
    mor_title: "Paddle이 제공하는 금융권 수준의 안전한 결제",
    mor_desc: "PMS 라이선스의 모든 금융 결제는 Paddle (Paddle Payments Ltd / Paddle.com Market Ltd)이 공인 판매자로서 안전하게 대행하며, 글로벌 세금 신고, PCI-DSS Level 1 결제 보안을 제공합니다.",
    mor_feat1: "엔터프라이즈 클라우드 보안",
    mor_feat2: "PCI-DSS Level 1 국제 인증",
    mor_feat3: "결제 즉시 라이선스 자동 발급",

    // 요금제 헤더
    pricing_badge: "Paddle Merchant of Record(MoR) 보증 · PCI-DSS Level 1 금융 보안",
    pricing_title: "전문 문서 컴파일을 위한 투명한 요금제",
    pricing_desc: "연구원과 학술 저자를 위해 설계되었습니다. 모든 Pro 구독료는 평생 소장권 구매 시 100% 전액 공제됩니다.",

    // 주기
    cycle_monthly: "월간 구독",
    cycle_quarterly: "분기 구독",
    cycle_yearly: "연간 구독",
    badge_recommended: "공식 추천",
    badge_save57: "57% 할인",

    // 카드 1
    card1_tier: "스타터",
    card1_title: "⚡ Pro 스튜디오",
    card1_desc: "문서 구조화, 인용 일관성 검토 및 서식 초안 미리보기에 적합합니다.",
    card1_period_mo: "/월",
    card1_period_qu: "/분기",
    card1_period_yr: "/년",
    card1_sub: "구독료 100% 평생 소장권 구매 시 공제",
    card1_f1: "동시 활성 프로젝트 최대 3개",
    card1_f2: "인용 색인 및 목차 자동 생성기",
    card1_f3: "서식 지정 초안 실시간 미리보기",
    card1_btn: "Pro 플랜 구독하기",

    // 카드 2
    card2_banner: "★ 저자에게 가장 인기 있는 플랜",
    card2_tier: "프로 플래그십",
    card2_title: "🌟 단일 프로젝트 평생 패스",
    card2_desc: "1개 핵심 프로젝트에 대한 무제한 클라우드 컴파일 및 고해상도 PDF 평생 내보내기.",
    card2_period: "일회성 구매",
    card2_sub: "결제 완료 즉시 디지털 라이선스 발급",
    card2_f1: "단일 프로젝트 무제한 문서 컴파일 및 업데이트",
    card2_f2: "초고해상도 벡터 PDF 전체 내보내기",
    card2_f3: "스마트 연속 페이지 번호 및 북마크",
    card2_f4: "1개 프로젝트에 대한 평생 라이선스 영구 귀속",
    card2_btn: "평생 패스 구매하기",

    // 카드 3
    card3_tier: "조직 및 팀",
    card3_title: "👥 팀 협업 스튜디오",
    card3_desc: "연구실, 학술 프로젝트 팀 또는 문서 작성 팀을 위한 다중 사용자 협업 워크벤치.",
    card3_period_mo: "/월",
    card3_period_qu: "/분기",
    card3_period_yr: "/년",
    card3_sub: "팀원 좌석 5개 및 활성 프로젝트 50개 포함",
    card3_f1: "동시 접속 팀원/편집자 좌석 5개",
    card3_f2: "활성 문서 프로젝트 할당량 50개",
    card3_f3: "격리된 암호화 클라우드 저장 공간",
    card3_f4: "최우선 이메일 기술 지원",
    card3_btn: "팀 플랜 구독하기",

    // 카드 4
    card4_tier: "엔터프라이즈",
    card4_title: "🏢 엔터프라이즈 맞춤형",
    card4_desc: "대규모 기관, 연구소 및 대학을 위한 맞춤형 계약 및 송장 발행 지원.",
    card4_price: "영업팀 문의",
    card4_sub: "맞춤형 좌석 할당 및 엔터프라이즈 구매 지원",
    card4_f1: "무제한 사용자 맞춤형 좌석",
    card4_f2: "기업용 소프트웨어 라이선스 계약 체결",
    card4_f3: "기업 간 은행 송금 결제 지원",
    card4_btn: "영업팀 문의하기",

    // 보증
    guar1_title: "즉각적인 디지털 전달",
    guar1_desc: "결제 완료 후 수초 이내에 라이선스 키와 클라우드 리소스가 자동 프로비저닝됩니다.",
    guar2_title: "100% 구독료 공제 혜택",
    guar2_desc: "기존에 납부한 Pro 구독료 전액은 평생 패스 구매 시 100% 차감 적용됩니다.",
    guar3_title: "영구 읽기 전용 보관 보장",
    guar3_desc: "구독이 만료되더라도 기존에 작성하고 컴파일한 문서와 PDF는 영구적으로 열람 및 다운로드가 가능합니다.",

    // 바닥글
    footer_rights: "© 2026 PMS 소프트웨어 스튜디오. All rights reserved.",
    footer_support: "고객 지원 문의:",
    footer_mor_title: "공인 판매자(MoR) 고지사항:",
    footer_mor_desc: "결제 및 주문 처리는 공인 판매자인 Paddle.com Market Ltd 또는 Paddle Payments Ltd에 의해 안전하게 처리됩니다."
  }
};

/**
 * Switch and apply the current active language across the document
 */
function setLang(lang) {
  if (!PMS_TRANSLATIONS[lang]) {
    lang = 'en';
  }
  localStorage.setItem('pms_site_lang', lang);
  
  const dict = PMS_TRANSLATIONS[lang];

  // 1. Update text nodes with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // 2. Update HTML nodes with data-i18n-html
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // 3. Update pill button active states
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const btnLang = btn.getAttribute('data-lang');
    if (btnLang === lang) {
      btn.className = "lang-btn px-2 py-0.5 rounded-full bg-white text-emerald-700 font-extrabold shadow-xs transition";
    } else {
      btn.className = "lang-btn px-2 py-0.5 rounded-full text-slate-500 hover:text-slate-900 transition";
    }
  });

  // 4. Update html lang attribute
  document.documentElement.lang = lang;
}

// Auto Initialize
document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get('lang');
  const savedLang = localStorage.getItem('pms_site_lang');
  
  // Default to English for Paddle audits, but honor saved user preference
  const initialLang = langParam || savedLang || 'en';
  setLang(initialLang);
});
