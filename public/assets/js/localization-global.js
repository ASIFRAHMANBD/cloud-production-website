(function () {
  var jaTranslations = {
    "Language": "言語",
    "Select language": "言語を選択",
    "Home": "ホーム",
    "About": "会社概要",
    "Service": "サービス",
    "Services": "サービス",
    "Portfolio": "ポートフォリオ",
    "Solutions": "ソリューション",
    "Events": "イベント",
    "Career": "採用情報",
    "Collaboration": "コラボレーション",
    "AI engineering collaboration": "AIエンジニアリングのコラボレーション",
    "Topic map": "トピックマップ",
    "Deep learning to deployment": "ディープラーニングからデプロイまで",
    "Accelerators & serving": "アクセラレータとサービング",
    "Agents & responsible AI": "エージェントと責任あるAI",
    "Our team organizes AI engineering around shared topic areas—from tensors, autodiff, and accelerators through transformers, training, inference, serving, agents, and production operations. We learn by building. If your organization shares this direction, we welcome dialogue on collaboration, knowledge exchange, and joint exploration toward the next era of AI.":
      "チームはテンソル・自動微分・アクセラレータからトランスフォーマー、学習、推論、サービング、エージェント、本番運用まで、共通のトピック領域でAIエンジニアリングを整理しています。構築を通じて学びます。方向性を共有いただける組織とは、協業・知見交換・共同探索について対話を歓迎します。",
    "AI engineering landscape": "AIエンジニアリングの全体像",
    "A topic tree shows how we group the work; the flow diagram shows how those groups connect from foundations to production.":
      "ツリーで学習領域のまとまりを示し、フロー図で基礎から本番までのつながりを示します。",
    "Topic hierarchy": "トピックの階層",
    "Foundations & mathematics": "基礎と数学",
    "PyTorch, autodiff, tensors, broadcasting, NN building blocks": "PyTorch、自動微分、テンソル、ブロードキャスト、NNの構成要素",
    "Convolutions & performance": "畳み込みと性能",
    "CNNs, pooling, vectorization, profiling, early GPU concepts": "CNN、プーリング、ベクトル化、プロファイリング、GPU入門",
    "GPU & accelerators": "GPUとアクセラレータ",
    "CUDA, memory, Triton, framework GPU integration": "CUDA、メモリ、Triton、フレームワークGPU統合",
    "Language models & transformers": "言語モデルとトランスフォーマー",
    "Tokenization, embeddings, attention, transformer stacks": "トークナイズ、埋め込み、アテンション、トランスフォーマー構成",
    "Training & adaptation": "学習と適応",
    "Optimizers, schedules, evaluation, fine-tuning, LoRA": "最適化手法、スケジュール、評価、ファインチューニング、LoRA",
    "Inference & memory": "推論とメモリ",
    "KV-cache, batching, PagedAttention, fused kernels": "KVキャッシュ、バッチ、PagedAttention、融合カーネル",
    "Serving & production ML": "サービングと本番ML",
    "APIs, queues, parallelism, quantization, deployment": "API、キュー、並列、量子化、デプロイ",
    "Advanced AI systems": "高度なAIシステム",
    "Reasoning, RAG, memory, agents, multi-agent orchestration": "推論、RAG、メモリ、エージェント、マルチエージェント",
    "Systems, MLOps & safety": "システム、MLOpsと安全性",
    "Architecture, observability, guardrails, security, CI/CD": "アーキテクチャ、可観測性、ガードレール、セキュリティ、CI/CD",
    "How topics connect": "トピックのつながり",
    "Directed flow from foundations through models, speed, and operations—not a strict sequence for every project, but a useful mental model.":
      "基礎からモデル、速度、運用へ向かう流れのイメージです。すべてのプロジェクトで厳密な順序というわけではありませんが、理解の助けになります。",
    "Figure: AI engineering topic flow": "図：AIエンジニアリングのトピックフロー",
    "Flow from foundations through LLMs, training, inference, serving, to agents and MLOps, with branches for convolutions and GPU.":
      "基礎からLLM、学習、推論、サービング、エージェントとMLOpsへの流れ。畳み込みとGPUは分岐として示します。",
    "Foundations": "基礎",
    "Conv & speed": "畳み込み・速度",
    "GPU · Triton": "GPU・Triton",
    "LLMs": "LLM",
    "Training": "学習",
    "Inference": "推論",
    "Serving": "サービング",
    "Agents · RAG": "エージェント・RAG",
    "MLOps · Safety": "MLOps・安全",
    "Main model path": "メインモデル経路",
    "Speed stack": "速度スタック",
    "Product & ops layer": "プロダクト・運用レイヤー",
    "Where we focus": "注力テーマ",
    "Six practice pillars mirror the tree and flow above—from tensors and accelerators through agents and MLOps.":
      "上のツリーとフローに沿った6つの実践柱です。テンソルとアクセラからエージェント・MLOpsまでをつなぎます。",
    "Deep Learning Fundamentals": "ディープラーニングの基礎",
    "We study core training dynamics, model design, and optimization principles—and validate them through compact experiments and prototypes.":
      "学習の挙動、モデル設計、最適化の原則を掘り下げ、小さな実験とプロトタイプで検証します。",
    "Hardware Acceleration (CUDA / Triton)": "ハードウェア高速化（CUDA / Triton）",
    "We explore GPU programming and kernel-level performance work so models and custom operators run efficiently on modern accelerators.":
      "GPUプログラミングとカーネルレベルの性能改善に取り組み、モデルやカスタム演算子が最新アクセラレータ上で効率よく動くよう検討します。",
    "LLM and Transformer Architecture": "LLMとトランスフォーマーアーキテクチャ",
    "We deepen our understanding of attention-based architectures, scaling behaviors, and how design choices affect quality and cost.":
      "アテンション系アーキテクチャの挙動やスケーリング、設計判断が品質とコストに与える影響を深く理解します。",
    "Inference Optimization (vLLM / PagedAttention)": "推論最適化（vLLM / PagedAttention）",
    "We focus on efficient serving: memory-aware KV cache strategies, throughput and latency trade-offs, and production-grade inference stacks.":
      "効率的な推論サービングに注力します。KVキャッシュを意識したメモリ戦略、スループットとレイテンシのトレードオフ、本番品質の推論スタックを扱います。",
    "AI Agents & Reasoning": "AIエージェントと推論",
    "We build and evaluate agentic patterns—tool use, planning, and structured reasoning—with emphasis on measurable outcomes and clear guardrails.":
      "ツール利用、計画、構造化された推論といったエージェント型のパターンを構築・評価し、測定可能な成果と明確なガードレールを重視します。",
    "Production AI & MLOps": "本番AIとMLOps",
    "We treat reliability as a first-class concern: reproducible pipelines, monitoring, release discipline, and operational ownership for AI systems.":
      "信頼性を最優先事項として扱います。再現可能なパイプライン、監視、リリース規律、AIシステムの運用責任まで含めて設計します。",
    "Partner with us": "パートナーシップ",
    "Whether you are exploring a joint proof of concept, exchanging technical practices, or aligning roadmap themes, we welcome structured collaboration that respects each side’s constraints. Share your context and we will respond with clear next steps.":
      "共同の概念実証の検討、技術プラクティスの交換、ロードマップテーマのすり合わせなど、双方の制約を尊重した協業を歓迎します。状況をお知らせいただければ、明確な次のステップをご提案します。",
    "Discuss collaboration": "コラボレーションについて相談する",
    "Contact Us": "お問い合わせ",
    "Web": "Web",
    "Apps": "アプリ",
    "Game": "ゲーム",
    "All": "すべて",
    "Company": "会社情報",
    "Support": "サポート",
    "Address": "住所",
    "About Us": "私たちについて",
    "Latest News": "最新ニュース",
    "FAQ's": "よくある質問",
    "Privacy Policy": "プライバシーポリシー",
    "Terms & Condition": "利用規約",
    "Community": "コミュニティ",
    "Submit": "送信",
    "Your Name": "お名前",
    "Last Name": "姓",
    "Company Name": "会社名",
    "Your Email": "メールアドレス",
    "Budget": "予算",
    "Consultation Free": "無料相談",
    "Custom Software": "カスタムソフトウェア",
    "Desktop Application": "デスクトップアプリケーション",
    "Mobile App": "モバイルアプリ",
    "Gen AI": "生成AI",
    "Web Development": "Web開発",
    "Designing": "デザイン",
    "Business Automation": "業務自動化",
    "Tell us more about idea!": "アイデアの詳細をお聞かせください！",
    "Ask Questions": "質問する",
    "Book a Call": "通話を予約",
    "More Details": "詳細を見る",
    "Close": "閉じる",
    "Hey Wanna Start Something Great?": "素晴らしいプロジェクトを始めませんか？",
    "Got an idea? Let’s chat on WhatsApp or jump on a quick call.": "アイデアはありますか？WhatsAppで相談するか、短いお電話でお話ししましょう。",
    "Web Application & Desktop Application Portfolios": "Webアプリケーション・デスクトップアプリケーションのポートフォリオ",
    "Cloud Production LTD": "クラウドプロダクション株式会社",
    "Image coming soon": "画像準備中",
    "Empowering your ideas with smarter, faster, and better software solutions.": "よりスマートに、より速く、より優れたソフトウェアソリューションであなたのアイデアを実現します。",
    "From idea to impact — our engineers power web, mobile, and enterprise solutions with innovation, precision, and passion.": "アイデアから成果まで。私たちのエンジニアは、革新性・精度・情熱でWeb、モバイル、エンタープライズソリューションを提供します。",
    "🔹 Custom Software | 🔹 Scalable Architecture": "🔹 カスタムソフトウェア | 🔹 スケーラブルアーキテクチャ",
    "Custom software · Scalable architecture": "カスタムソフトウェア · スケーラブルなアーキテクチャ",
    "Book a Free Consultation": "無料相談を予約",
    "Clients say working with us is like having a compass.": "私たちとの仕事は、まるで羅針盤を持って進むようだとお客様から評価されています。",
    "Get access to 1,000+ certified cloud-native experts guiding best practice, pre-empting pitfalls, providing essential technical support and steering teams through cultural change.": "1,000名以上の認定クラウドネイティブ専門家が、ベストプラクティスの提示、リスクの事前回避、重要な技術支援、そしてチームの変革推進をサポートします。",
    "MORE ABOUT US →": "私たちについて詳しく →",
    "Why Trust Cloud Production LTD to Lead the Way?": "Cloud Production LTDが選ばれる理由",
    "Innovating Through Software Excellence": "ソフトウェア品質による革新",
    "Cloud Production LTD is a trusted name in software development, known for delivering high-quality, scalable, and reliable digital solutions tailored to your business needs. With years of hands-on experience across industries, we specialize in building custom software, mobile applications, web platforms, and complete business automation systems. Our strength lies in our client-focused approach, technical expertise, and commitment to innovation. Whether it’s streamlining operations, enhancing user experience, or integrating advanced technologies like AI and IoT — Cloud Production LTD is dedicated to keeping your business ahead in the digital race.": "Cloud Production LTDは、ビジネスニーズに合わせた高品質・高拡張性・高信頼性のデジタルソリューションを提供する、信頼あるソフトウェア開発企業です。業界横断の豊富な実績をもとに、カスタムソフトウェア、モバイルアプリ、Webプラットフォーム、業務自動化システムを構築しています。私たちの強みは、顧客中心の姿勢、技術力、そして革新へのコミットメントにあります。業務効率化、UX向上、AIやIoTなど先端技術の統合まで、Cloud Production LTDはお客様のビジネスをデジタル競争で先へ導きます。",
    "Our Promise to You": "お客様へのお約束",
    "Agile and scalable development processes that adapt to your needs Proven track record of successful project delivery across diverse industries Comprehensive end-to-end solutions covering design, development, deployment, and support Transparent project management with continuous communication and flexible workflows Commitment to quality, security, and delivering an excellent user experience Long-term partnership mindset with ongoing maintenance and strategic support At Cloud Production LTD, we don’t just build software — we build the future of your business. Let’s create smarter solutions together.": "お客様のニーズに適応するアジャイルかつスケーラブルな開発プロセス。多業種での確かな導入実績。設計・開発・導入・運用まで一貫したエンドツーエンド支援。継続的なコミュニケーションと柔軟な進行管理。品質・セキュリティ・優れたユーザー体験へのこだわり。保守と戦略支援を含む長期的なパートナーシップ。Cloud Production LTDは単にソフトウェアを作るのではなく、ビジネスの未来を共に創ります。",
    "Projects": "プロジェクト",
    "Offshore Clients": "海外クライアント",
    "Country": "国",
    "Team Members": "チームメンバー",
    "Discover our values and meet our executive team.": "私たちの価値観と経営チームをご覧ください。",
    "Explore Our Services": "サービス一覧",
    "Cloud Production incorporates the full cycle of offshore software development services. We focus on providing managed dedicated teams and developing sophisticated enterprise applications.": "Cloud Productionは、オフショア開発の全工程をカバーするサービスを提供しています。専任チームのマネジメント提供と、高度なエンタープライズアプリケーション開発に注力しています。",
    "Our web design and development service offers expert solutions to create responsive, stunning and functional websites tailored to meet your specific needs.": "当社のWebデザイン・開発サービスは、レスポンシブで魅力的かつ機能的なサイトを、お客様の要件に合わせて提供します。",
    "Offshore Development": "オフショア開発",
    "At Cloud Production Ltd., we offer top-notch offshore development services designed to meet your software development needs efficiently and cost-effectively.": "Cloud Production Ltd.では、高品質なオフショア開発サービスを提供し、効率的かつコスト効果の高い形で開発ニーズに応えます。",
    "AI Integration": "AI統合",
    "Elevate your business with our cutting-edge AI integration expertise. At Cloud Production Ltd, we seamlessly merge artificial intelligence into your operations.": "最先端のAI統合でビジネスを次の段階へ。Cloud Production Ltdは、業務へAIをシームレスに組み込みます。",
    "Software Development": "ソフトウェア開発",
    "Cloud Production Limited provides high quality and reliable software development related services. We focus on your specific needs that matches budget and time frame.": "Cloud Production Limitedは、高品質で信頼性の高いソフトウェア開発サービスを提供します。予算と納期に合わせた最適な提案を行います。",
    "Game Development": "ゲーム開発",
    "We specialize in delivering AAA type game development services that cater to the diverse needs of the gaming industry. With a team of highly skilled and passionate game developers.": "私たちはゲーム業界の多様なニーズに対応するAAA級ゲーム開発サービスを提供しています。高度なスキルと情熱を持つ開発チームが対応します。",
    "Mobile App development": "モバイルアプリ開発",
    "Cloud Production Ltd, we are dedicated to crafting exceptional mobile applications that cater to your specific needs.": "Cloud Production Ltdは、お客様の目的に合わせた高品質なモバイルアプリ開発に取り組んでいます。",
    "We go the extra mile in all our projects. Starting with the discovery stage when we carefully analyze your requirements and up to the launch of the finalized product. Cloud Production LTD main goal is to exceed expectations and deliver solution which will be the best fit for each specific business case and take your company to the next level of efficiency.": "私たちはすべてのプロジェクトで期待以上の成果を目指します。要件分析のディスカバリー段階から最終リリースまで丁寧に進め、各ビジネスケースに最適なソリューションを提供して企業の効率を次のレベルへ引き上げます。",
    "More Details": "詳細を見る",
    "Our Core Technologies": "主要技術",
    "Cloud Production LTD Pro provides world-class development services applying the latest web, mobile, desktop, and enterprise technologies.": "Cloud Production LTD Proは、最新のWeb・モバイル・デスクトップ・エンタープライズ技術を活用し、世界水準の開発サービスを提供します。",
    "AI-Powered Solutions": "AIソリューション",
    "We specialize in building intelligent systems using cutting-edge AI, LLM, and vector database technologies. From RAG systems to multi-agent AI applications.": "私たちは最先端のAI、LLM、ベクターデータベース技術を活用したインテリジェントシステム構築を得意としています。RAGからマルチエージェントAIまで対応します。",
    "Retrieval Augmented Generation": "検索拡張生成（RAG）",
    "Build intelligent document search and Q&A systems that combine LLMs with vector databases for accurate, context-aware responses.": "LLMとベクターデータベースを組み合わせ、文脈を理解した高精度な文書検索・Q&Aシステムを構築します。",
    "LangChain + OpenAI/Claude": "LangChain + OpenAI/Claude",
    "Pinecone/Weaviate Vector DB": "Pinecone/Weaviate ベクタDB",
    "Semantic Search & Retrieval": "セマンティック検索・検索拡張",
    "Agentic AI Systems": "エージェント型AIシステム",
    "Deploy autonomous agent teams that collaborate to solve complex tasks with reasoning, planning, and tool use capabilities.": "推論・計画・ツール活用が可能な自律エージェント群で、複雑な課題を協調して解決します。",
    "CrewAI & AutoGen Frameworks": "CrewAI・AutoGenフレームワーク",
    "Multi-Agent Orchestration": "マルチエージェントオーケストレーション",
    "Task Automation & Workflows": "タスク自動化・ワークフロー",
    "LLM Integration": "LLM統合",
    "Integrate powerful language models into your applications with custom fine-tuning, prompt engineering, and production-ready pipelines.": "カスタム微調整、プロンプト設計、本番運用パイプラインにより、強力な言語モデルをアプリに統合します。",
    "OpenAI, Claude, Hugging Face": "OpenAI、Claude、Hugging Face",
    "Custom Model Fine-tuning": "カスタムモデル微調整",
    "Prompt Optimization & Testing": "プロンプト最適化・検証",
    "Vector Databases": "ベクターデータベース",
    "Store, index, and search high-dimensional vector data at scale for semantic search, similarity matching, and recommendation systems.": "高次元ベクターデータを大規模に保存・索引・検索し、意味検索、類似検索、レコメンドを実現します。",
    "Pinecone, Weaviate, Milvus": "Pinecone、Weaviate、Milvus",
    "Semantic Search Implementation": "セマンティック検索実装",
    "Recommendation Engines": "レコメンドエンジン",
    "Conversational AI": "対話型AI",
    "Build intelligent chatbots, voice assistants, and conversational interfaces that understand context and provide human-like interactions.": "文脈理解が可能なチャットボット、音声アシスタント、対話UIを構築し、人間らしい応答を実現します。",
    "Intelligent Chatbots": "インテリジェントチャットボット",
    "Context Awareness & Memory": "文脈理解・メモリ",
    "Multi-turn Conversations": "マルチターン会話",
    "ML & Data Intelligence": "機械学習・データインテリジェンス",
    "Leverage machine learning models for predictive analytics, classification, clustering, and data-driven insights at enterprise scale.": "予測分析、分類、クラスタリング、データ主導の洞察を、エンタープライズ規模で活用します。",
    "Predictive Analytics Models": "予測分析モデル",
    "Data Pipelines & MLOps": "データパイプライン・MLOps",
    "Real-time Insights & Dashboards": "リアルタイム分析・ダッシュボード",
    "Ready to transform your business with AI? Let's discuss your AI project needs.": "AIでビジネス変革を進めませんか？要件についてご相談ください。",
    "Start Your AI Project": "AIプロジェクトを始める",
    "Solution Capabilities": "ソリューション能力",
    "Beyond languages and frameworks — we deliver outcomes across AI, design, delivery, and quality.": "言語やフレームワークを超えて、AI・デザイン・開発推進・品質の面で成果を提供します。",
    "AI & Data": "AI・データ",
    "Applied intelligence for smarter products and operations.": "より賢い製品と運用のための実践的インテリジェンス。",
    "ML models, MLOps, vector search": "MLモデル、MLOps、ベクター検索",
    "Chatbots, recommendations, RAG": "チャットボット、レコメンド、RAG",
    "Data pipelines and analytics": "データパイプラインと分析",
    "UI/UX Design": "UI/UXデザイン",
    "Human-centered experiences that convert and delight.": "成果につながる、人間中心の体験設計。",
    "Research, wireframes, prototyping": "リサーチ、ワイヤーフレーム、プロトタイプ",
    "Design systems and accessibility": "デザインシステムとアクセシビリティ",
    "Motion and micro-interactions": "モーションとマイクロインタラクション",
    "Project Management": "プロジェクト管理",
    "Predictable delivery with agile workflows and governance.": "アジャイルな進行とガバナンスで、予測可能なデリバリーを実現。",
    "Roadmapping, backlog, sprint cadence": "ロードマップ、バックログ、スプリント運用",
    "Stakeholder comms and risk control": "ステークホルダー連携とリスク管理",
    "Metrics: velocity, burndown, DORA": "指標: ベロシティ、バーンダウン、DORA",
    "Quality Assurance": "品質保証",
    "Reliability first: automated tests and robust CI/CD.": "信頼性を最優先に、自動テストと堅牢なCI/CDを実現。",
    "Unit, E2E, performance testing": "単体・E2E・性能テスト",
    "Security and accessibility checks": "セキュリティ・アクセシビリティ検証",
    "CI/CD pipelines and coverage": "CI/CDパイプラインとカバレッジ",
    "Bridge Engineering": "橋梁エンジニアリング",
    "Assisting users with bridge modeling, simulation, and BIM-based solutions.": "橋梁モデリング、シミュレーション、BIMベースのソリューションを支援します。",
    "Analysis and design validation": "解析と設計検証",
    "Implementing design codes": "設計基準の実装",
    "Automating calculations, and assisting users": "計算自動化とユーザー支援",
    "Testimonial": "お客様の声",
    "Our Clients Say": "お客様の声",
    "Our Clients": "取引先",
    "Cloud Production at a Glance": "Cloud Productionのご紹介",
    "Cloud Production is embarking on a transformative journey in Bangladesh, selecting top-tier software engineers from leading universities for advanced training in high-class technologies. This initiative is designed to unlock new industrial opportunities and create innovative career paths. In a prestigious collaboration with three Japanese powerhouses—Arosaro, Techs Cafe, and Cloud Production (Japan & Bangladesh)—this milestone event has been spotlighted by major media outlets including ATN Bangla, RTV, and NTV.": "Cloud Productionは、バングラデシュで変革の取り組みを進めています。主要大学から優秀なソフトウェアエンジニアを選抜し、高度技術のトレーニングを実施しています。この取り組みは新たな産業機会と革新的なキャリアパスを創出することを目的としています。Arosaro、Techs Cafe、Cloud Production（日本・バングラデシュ）との連携により、この重要な取り組みはATN Bangla、RTV、NTVなど主要メディアでも紹介されました。",
    "Get in Touch": "お問い合わせ",
    "Share your project idea and we’ll get back to you shortly.": "プロジェクトのアイデアをお聞かせください。折り返しご連絡いたします。",
    "First Name": "名",
    "Your first name": "名を入力",
    "Your last name": "姓を入力",
    "Company or team": "会社名またはチーム名",
    "Email": "メール",
    "you@example.com": "you@example.com",
    "Select service": "サービスを選択",
    "Select budget": "予算を選択",
    "Project Brief": "プロジェクト概要",
    "Tell us about your project, goals, and timeline.": "プロジェクト内容、目標、スケジュールをご記入ください。",
    "Cloud Production LTD is a trusted name in software development, known for delivering high-quality, scalable, and reliable digital solutions tailored to your business needs.": "Cloud Production LTDは、ビジネスニーズに合わせた高品質・高拡張性・高信頼性のデジタルソリューションを提供する、信頼あるソフトウェア開発企業です。",
    "Mr Takuya Sato": "Mr Takuya Sato",
    "CEO, Arousal Tech Japan": "CEO, Arousal Tech Japan",
    "Funai Minayasu Hayaki": "Funai Minayasu Hayaki",
    "CEO, Cloud Production Japan (Main Branch)": "CEO, Cloud Production Japan (Main Branch)",
    "I wanted to express our sincere gratitude for the long-standing collaboration with CPL technical team. Over the years, your team has consistently demonstrated professionalism and excellence, delivering results that exceeded our expectations. Your technical expertise, timely deliveries, effective communication, problem-solving skills, and proficiency in Japanese support have made our partnership invaluable. We look forward to continuing this successful collaboration in future projects.": "CPL技術チームとの長年にわたる協力に、心より感謝申し上げます。長年にわたり、貴社チームは常に高い専門性と卓越した成果を示し、期待を上回る結果を提供してくれました。技術力、納期遵守、円滑なコミュニケーション、問題解決力、そして日本語対応力により、私たちのパートナーシップは非常に価値あるものとなっています。今後のプロジェクトでもこの成功を継続できることを期待しています。",
    "I was looking to take my retail business online, and Cloud Production Ltd. made it a breeze. They created a beautiful e-commerce website for us, and our online sales have skyrocketed since then. The design is modern, and the user experience is seamless. Highly recommended!": "小売ビジネスをオンライン化したいと考えていましたが、Cloud Production Ltd.が非常にスムーズに実現してくれました。美しいECサイトを構築していただき、それ以降オンライン売上は大きく伸びています。デザインはモダンで、ユーザー体験も非常に優れています。強くおすすめします。",
    "About Cloud Production LTD.": "クラウドプロダクション株式会社について",
    "A joint venture between Japan and Bangladesh since 2018 — delivering innovative IT solutions with a record of 150+ projects and 100% client satisfaction.": "2018年から日本とバングラデシュの共同事業として、150件以上の実績と100%の顧客満足を背景に、革新的なITソリューションを提供しています。",
    "Who We Are": "私たちについて",
    "Cloud Production Ltd. is a tech company that has been serving since 2018 as a joint venture between Japan and Bangladesh, dedicated to providing innovative and cutting-edge technology solutions to businesses and organizations. With a commitment to excellence, we specialize in delivering high-quality IT services that drive efficiency, productivity, and growth. From then, we have a record of 150+ project completion on time with 100% client satisfaction. We continue to grow as a company as well, currently employing 50+ people.": "Cloud Production Ltd.は、日本とバングラデシュの共同事業として2018年よりサービスを提供しているテック企業です。企業や組織に向けて、先進的で革新的な技術ソリューションを提供しています。私たちは品質への強いこだわりを持ち、効率・生産性・成長を促進する高品質なITサービスを得意としています。これまで150件以上のプロジェクトを納期内に完了し、顧客満足度100%を達成してきました。現在は50名以上の体制で、継続的に成長しています。",
    "Client Satisfaction": "顧客満足",
    "100% Satisfaction rate across 150+ completed projects.": "150件以上の完了プロジェクトで満足度100%を達成。",
    "Overseas Development Expertise": "海外開発の専門性",
    "A joint venture bridging Japan and Bangladesh for innovation.": "日本とバングラデシュをつなぐ共同事業で、イノベーションを推進。",
    "Our Mission & Vision": "私たちのミッションとビジョン",
    "Our Mission": "ミッション",
    "Our mission is to empower businesses and individuals through delivering innovative and customized IT solutions that enhance productivity, streamline operations, and drive growth.": "私たちのミッションは、生産性向上、業務最適化、成長促進を実現する革新的かつカスタマイズ可能なITソリューションを提供し、企業と個人を支援することです。",
    "Our Vision": "ビジョン",
    "We endeavor to cultivate exceptional developers who can proudly represent Bangladesh on the global stage, driven by a dynamic culture and unwavering motivation.": "私たちは、ダイナミックな企業文化と揺るぎない意欲のもと、バングラデシュを世界で誇れる優れた開発者を育成することを目指しています。",
    "Our Journey": "私たちの歩み",
    "Key milestones since 2018": "2018年以降の主要マイルストーン",
    "Incorporation and Humble Beginnings": "設立と第一歩",
    "Cloud Production Ltd. was formally incorporated in the year 2018, with a small dedicated team at its inception.": "Cloud Production Ltd.は2018年に正式設立され、少数精鋭のチームでスタートしました。",
    "Market Entry and Offshore Expansion in Japan": "日本市場参入とオフショア展開",
    "CPL initiated its market entry into Japan, concurrently introducing offshore services as part of our strategic expansion efforts.": "CPLは日本市場への参入を開始し、戦略的拡大の一環としてオフショアサービスも展開しました。",
    "Strategic Partnership with Arousal Tech": "Arousal Techとの戦略的提携",
    "Established a significant partnership with Arousal Tech, marking them as a valuable collaborator in our endeavors.": "Arousal Techと重要なパートナーシップを締結し、主要な協業先として関係を構築しました。",
    "Product Diversification and Service Expansion": "プロダクト多角化とサービス拡張",
    "Cloud Production Ltd. (CPL) has embarked on the development of in-house products, including HRMS and a job portal, with the intention of offering these solutions to external clients as part of our extended service portfolio.": "Cloud Production Ltd.（CPL）は、HRMSや求人ポータルなどの自社プロダクト開発に着手し、サービス領域の拡張として外部顧客への提供を開始しました。",
    "Local & Global Expansion": "国内外への拡大",
    "We have initiated the provision of services both locally and globally, with a particular emphasis on Japan as a priority market.": "日本を重点市場として、国内外の両方でサービス提供を開始しました。",
    "Launched a flagship office in Dhaka": "ダッカに旗艦オフィスを開設",
    "Cloud Production Ltd. (CPL) has relocated to a new physical office location, marking a significant step in our journey towards fostering innovation, attracting fresh talent, and cultivating new business ideas.": "Cloud Production Ltd.（CPL）は新オフィスへ移転し、イノベーションの促進、新たな人材獲得、事業アイデア創出に向けた大きな一歩を踏み出しました。",
    "How We Work": "私たちの進め方",
    "We believe that software product outsourcing is easy if you have a reliable and experienced partner at your side. Our mission is to support you with our expert services at any stage of the project": "信頼できる経験豊富なパートナーがいれば、ソフトウェア開発のアウトソーシングはスムーズです。私たちはプロジェクトのあらゆる段階で専門サービスによりお客様を支援します。",
    "Dedicated Tech Teams, Built Around Your Vision": "あなたのビジョンに合わせた専任技術チーム",
    "From MVP to enterprise-scale, get a full-time team that delivers faster, smarter, and at up to 50% lower cost than in-house.": "MVPからエンタープライズ規模まで、社内開発より最大50%低コストで、より速く賢く開発を進める専任チームを提供します。",
    "Starter": "スターター",
    "Launch": "ローンチ",
    "Ideal for pilot projects and fast launches.": "実証プロジェクトや短期ローンチに最適。",
    "Get Launch": "ローンチを相談",
    "Team Includes:": "チーム構成:",
    "1 Frontend Developer": "フロントエンド開発者 1名",
    "1 Backend Developer": "バックエンド開発者 1名",
    "Dedicated Account Manager": "専任アカウントマネージャー",
    "Part-time PM, QA, Designer, DevOps": "パートタイムPM・QA・デザイナー・DevOps",
    "Most Popular": "最も人気",
    "Growth": "グロース",
    "For growing teams managing custom software needs.": "カスタムソフトウェア需要が拡大するチーム向け。",
    "Get Growth": "グロースを相談",
    "AI-Powered Development Integration": "AI活用開発統合",
    "1 Product Designer": "プロダクトデザイナー 1名",
    "1 Quality Assurance Specialist": "品質保証スペシャリスト 1名",
    "1 Technical Project Manager": "テクニカルPM 1名",
    "Enterprise": "エンタープライズ",
    "Scale": "スケール",
    "Built for businesses scaling complex software projects": "複雑な開発案件を拡張する企業向け",
    "Get Scale": "スケールを相談",
    "AI-Powered Development + Advanced DevOps": "AI活用開発 + 高度DevOps",
    "2 Backend Developers": "バックエンド開発者 2名",
    "1 Mobile App Developer": "モバイルアプリ開発者 1名",
    "1 DevOps Engineer": "DevOpsエンジニア 1名",
    "OUR PROCESS": "進行プロセス",
    "Have a wonderful software idea? Our team of software development and business experts will guide you from concept to a market-ready product.": "素晴らしいソフトウェアのアイデアはありますか？私たちの開発・ビジネス専門チームが、構想から市場投入まで伴走します。",
    "We Shape Your Idea": "アイデアを形にします",
    "We are just a click away from you. Send us a message with your inquiry and our team will reach out to you in 24 hours.": "私たちはすぐそばにいます。お問い合わせを送っていただければ、24時間以内にチームよりご連絡します。",
    "Our team just needs a little bit of hints. Share your ideas with us and let us give them a life. With your collaboration, Our team of Business analysis conducts research and envision your project.": "少しのヒントがあれば十分です。アイデアを共有いただければ、私たちが具体化します。お客様との連携のもと、ビジネス分析チームが調査を行い、プロジェクト像を設計します。",
    "Executing Legal Part": "契約・法務手続き",
    "We sit together with our clients and present possible products and all its terms, and expected delivery time. We make a contractual agreement before signing the document by both parties.": "お客様と協議し、実現可能な製品案、条件、想定納期をご提示します。双方が署名する前に契約内容を明確化します。",
    "Project Mapping And Management": "プロジェクト設計と管理",
    "In this part, we design the project with its specifications and features and plan the possible deadline for the project. Our team of experts organises all the necessary project development processes.": "この段階で仕様・機能を設計し、実現可能な納期計画を立てます。専門チームが開発に必要な全プロセスを整備します。",
    "Launch, Support And Update": "リリース・サポート・改善",
    "After the consensual agreements, our team of experts commence working on the project development and keep you updated with information, demos and features of the software solution. Once the project is done, we help our client set up the project and run a number of tests. If there is any further support needed, our customer care service is always available.": "合意後、専門チームが開発を開始し、進捗情報・デモ・機能を随時共有します。納品後は導入支援と各種テストを実施し、追加サポートにも継続対応します。",
    "WHAT WE OFFER": "提供内容",
    "We understand that existing off-the-shelf products may not address the full needs of your company and smooth workflow is vital for your business success. An upgraded version of your current software can deal with such problems. Considering this fact, we offer customized software solutions, which are also cost-effective,for our clients.": "既製品では貴社の要件を十分に満たせない場合があり、円滑な業務フローは事業成功に不可欠です。既存システムの高度化で課題を解決できるため、私たちは費用対効果の高いカスタムソフトウェアを提供します。",
    "Cost Effectiveness": "コスト効率",
    "You pay us only once and there is no hidden charge for our support. As soon as you become our clients, you never need to worry about license fees or sharing revenue with anyone. We cover everything for you.": "お支払いは明確で、サポートに隠れた費用はありません。ご契約後はライセンス料や売上分配を気にする必要はなく、必要な範囲を包括的に支援します。",
    "Quick and Responsive Support": "迅速で柔軟なサポート",
    "Our team of experts are very quick to respond to your query and deal with any problems you face with your enterprise solution. We value your time and business and so our team fixes any issues as soon as possible.": "専門チームが問い合わせに迅速対応し、業務システムの課題をスピーディーに解決します。お客様の時間とビジネス価値を最優先に対応します。",
    "New Features and Functionality": "新機能と機能拡張",
    "We understand that you have some ideas and want some features to be included in your solutions and so we customize your tool according to your demand and requirement. You get exactly what you need in order to boost the functionality of your business process.": "お客様のアイデアや必要機能を反映し、要件に合わせてツールをカスタマイズします。業務プロセスの機能性向上に必要なものを的確に提供します。",
    "Reasonable Development Cost": "適正な開発コスト",
    "Ultimately most clients look for opportunities to build their enterprise solution with an affordable fee and we understand this. Our product development cost is much lower than what is available on the market. We implement, integrate and develop a new product .": "多くのお客様が、手頃な費用で業務システムを構築できる方法を求めています。私たちは市場水準より抑えたコストで、実装・統合・新規開発を提供します。",
    "Solutions": "ソリューション",
    "Cloud Production LTD is a perfect workplace for people who are passionate about technology and leveraging it to solve new challenges every day. If you are ready to think out of the box, develop yourself as a specialist, and learn day-by-day - you're one of us. In our turn, we'll make everything to make this process comfortable and engaging for every member of our team.!": "Cloud Production LTDは、技術に情熱を持ち、日々新しい課題解決に挑む人に最適な環境です。既成概念にとらわれず、専門性を高めながら成長したい方を歓迎します。私たちは、すべてのメンバーが快適かつ意欲的に取り組める環境づくりを徹底します。",
    "Our": "私たちの",
    "Digital Solutions": "デジタルソリューション",
    "Our Digital Solutions": "私たちのデジタルソリューション",
    "Explore our comprehensive range of technology solutions designed to transform your business": "ビジネス変革のために設計された、包括的な技術ソリューションをご覧ください。",
    "Modern & Responsive": "モダンでレスポンシブ",
    "Mobile Apps": "モバイルアプリ",
    "iOS & Android": "iOS・Android",
    "Interactive & Engaging": "インタラクティブで魅力的",
    "Cloud Solutions": "クラウドソリューション",
    "Scalable & Secure": "拡張性とセキュリティ",
    "AI Solutions": "AIソリューション",
    "Smart & Automated": "スマートで自動化",
    "Data Analytics": "データ分析",
    "Insights & Intelligence": "インサイトと知見",
    "Custom Web Development": "カスタムWeb開発",
    "We create modern, responsive websites and web applications that deliver exceptional user experiences. Our solutions are built with cutting-edge technologies to ensure optimal performance, scalability, and security.": "私たちは、優れたユーザー体験を提供するモダンでレスポンシブなWebサイト・Webアプリを開発します。最先端技術を用いて、高性能・高拡張性・高セキュリティを実現します。",
    "Responsive Design": "レスポンシブデザイン",
    "Progressive Web Apps": "プログレッシブWebアプリ",
    "E-commerce Solutions": "ECソリューション",
    "Get Started": "相談を始める",
    "View Projects": "実績を見る",
    "Mobile App Development": "モバイルアプリ開発",
    "Transform your ideas into powerful mobile applications for iOS and Android platforms. We build native and cross-platform apps that provide seamless user experiences and robust functionality.": "あなたのアイデアを、iOS・Android向けの高機能モバイルアプリへと形にします。ネイティブ/クロスプラットフォーム双方に対応し、シームレスな体験と堅牢な機能を提供します。",
    "Cross-Platform Development": "クロスプラットフォーム開発",
    "Native Performance": "ネイティブ性能",
    "App Store Optimization": "アプリストア最適化",
    "Interactive Game Development": "インタラクティブゲーム開発",
    "Create engaging and immersive gaming experiences across multiple platforms. From mobile games to desktop applications, we bring your gaming vision to life with cutting-edge technology.": "複数プラットフォームで没入感のあるゲーム体験を実現します。モバイルからデスクトップまで、最先端技術でゲームのビジョンを形にします。",
    "Multi-platform Games": "マルチプラットフォームゲーム",
    "3D Graphics & Animation": "3Dグラフィックス・アニメーション",
    "Multiplayer Integration": "マルチプレイヤー連携",
    "Cloud Infrastructure Solutions": "クラウド基盤ソリューション",
    "Leverage the power of cloud computing to scale your business operations. We provide comprehensive cloud solutions including migration, deployment, and management services.": "クラウドコンピューティングを活用して業務を拡張します。移行・導入・運用管理までを含む包括的なクラウドソリューションを提供します。",
    "Cloud Migration": "クラウド移行",
    "Serverless Architecture": "サーバーレスアーキテクチャ",
    "DevOps Integration": "DevOps統合",
    "Artificial Intelligence Solutions": "人工知能ソリューション",
    "Harness the power of AI to automate processes, gain insights, and drive innovation. We develop custom AI solutions including machine learning models and intelligent automation systems.": "AIの力で業務を自動化し、洞察を得て、イノベーションを加速します。機械学習モデルや高度な自動化システムを含むカスタムAIソリューションを開発します。",
    "Machine Learning": "機械学習",
    "Natural Language Processing": "自然言語処理",
    "Computer Vision": "コンピュータビジョン",
    "Data Analytics & Business Intelligence": "データ分析・BI",
    "Transform your raw data into actionable insights with our comprehensive analytics solutions. We help businesses make data-driven decisions through advanced analytics and visualization.": "包括的な分析ソリューションで、生データを実行可能なインサイトに変換します。高度な分析と可視化で、データドリブンな意思決定を支援します。",
    "Data Visualization": "データ可視化",
    "Predictive Analytics": "予測分析",
    "Real-time Dashboards": "リアルタイムダッシュボード",
    "At Cloud Production LTD, our events are more than just gatherings — they’re celebrations of innovation, teamwork, and growth. From tech workshops and product launches to team-building activities and cultural celebrations, every event brings our people closer and fuels fresh ideas. These moments highlight the passion, energy, and creativity that drive Cloud Production LTD forward, turning milestones into memories and connections into collaborations.": "Cloud Production LTDのイベントは、単なる集まりではなく、革新・チームワーク・成長を祝う場です。技術ワークショップや製品ローンチから、チームビルディングや文化的な催しまで、すべてのイベントが人をつなぎ、新しい発想を生み出します。これらの時間は、Cloud Production LTDを前進させる情熱・活力・創造性を象徴し、節目を思い出へ、つながりを協働へと変えていきます。",
    "yearly-events": "年間イベント",
    "Monthly Events": "月次イベント",
    "Weekly Activities": "週次アクティビティ",
    "Festival & Special Celebrations": "祝祭・特別イベント",
    "Yearly Events": "年間イベント",
    "These events strengthen team unity and morale, creating lasting memories and aligning with Cloud Production LTD’s mission of continuous growth and appreciation.": "これらのイベントは、チームの結束と士気を高め、記憶に残る体験を生み出すとともに、Cloud Production LTDの継続的な成長と感謝の理念に沿った取り組みです。",
    "Yearly Gift Items": "年間ギフト",
    "Complementing these experiences is the heartfelt tradition of Yearly Gift Items. Far from being routine giveaways, these thoughtfully selected branded items reflect Cloud Production ongoing commitment to recognizing effort, showing appreciation, and maintaining a personal connection with every team member. Whether it's custom apparel, tech accessories, or wellness products, each gift symbolizes a shared identity and appreciation for one another’s role in the company’s journey. ": "これらの体験を支えるのが、心のこもった『年間ギフト』の伝統です。単なる配布品ではなく、厳選されたブランドアイテムには、努力への敬意、感謝の表明、そしてメンバー一人ひとりとのつながりを大切にするCloud Productionの姿勢が込められています。カスタムアパレル、テックアクセサリー、ウェルネス用品など、すべての贈り物が会社の歩みを共にする仲間への感謝を象徴しています。",
    "Annual Awards Ceremony": "年間表彰式",
    "The Ceremony serves as a milestone moment in the professional journey of every high-performing team member. It is a powerful tradition that publicly acknowledges individual and team accomplishments, encouraging a culture where success is celebrated, not overlooked. It sends a strong message that contributions—big or small—are valued. For many, receiving an award from their peers and leaders is a moment of pride that lasts far beyond the event itself. ": "この式典は、高い成果を上げたメンバーにとってキャリア上の重要な節目となります。個人・チームの成果を公に称えることで、成功を見逃さず称賛する文化を育みます。大小を問わず貢献が評価されるという強いメッセージを届け、多くの人にとって同僚やリーダーからの表彰は、イベント後も続く誇りとなります。",
    "Year-End Celebration": "年末セレブレーション",
    "Equally anticipated is the Year-End Celebration, an event that blends reflection with festivity. It’s a time when teams pause their busy schedules to look back on the year’s challenges, breakthroughs, and growth. This celebration isn't just about having fun—it’s about building community. Employees share laughter, memories, and appreciation in a relaxed, joyful setting. Leadership often takes this opportunity to offer words of thanks. ": "年末セレブレーションも同様に待ち望まれるイベントで、振り返りと祝祭を兼ね備えています。忙しい日常を少し止め、1年の挑戦・成果・成長を共有する時間です。楽しむだけでなく、コミュニティを築くことが目的です。社員はリラックスした雰囲気の中で笑顔と記憶を分かち合い、経営陣から感謝の言葉が伝えられます。",
    "Monthly events keep our culture vibrant and our teams energized. They bring rhythm to our progress and foster real connection.": "月次イベントは企業文化を活性化し、チームに活力を与えます。継続的な成長にリズムを生み、本質的なつながりを育てます。",
    "Employee of the Month": "月間MVP社員",
    "The Employee of the Month program at Cloud Production LTD is a meaningful initiative that goes beyond simply acknowledging hard work—it reinforces a culture of excellence, motivation, and continuous improvement. Each month, one outstanding individual is selected based on performance, attitude, teamwork, and overall contribution to company goals. This recognition not only boosts the recipient’s morale and confidence but also sets a positive benchmark for others. It encourages healthy competition, inspires employees to strive for excellence, and consistently motivates them to put forth their best efforts. ": "Cloud Production LTDの『月間MVP社員』制度は、努力の評価にとどまらず、卓越性・意欲・継続改善の文化を強化する意義ある取り組みです。毎月、成果・姿勢・チームワーク・目標貢献を基準に優秀な1名を選出します。この表彰は受賞者のモチベーションと自信を高めるだけでなく、他メンバーにとって前向きな指標となります。健全な競争を促し、より高い成果への挑戦を後押しします。",
    "Buffet Dinner": "ビュッフェディナー",
    "The Buffet Dinner at Cloud Production LTDis more than just a meal—it’s a purposeful gathering aimed at fostering camaraderie and team spirit. Held monthly, this relaxed event allows employees to step away from their daily tasks and enjoy quality time with colleagues in an informal setting. Sharing a meal together helps break down barriers, encourages open communication, and strengthens personal connections across teams and departments. ": "Cloud Production LTDのビュッフェディナーは、食事以上の価値を持つ交流の場です。毎月開催されるこのイベントでは、社員が日常業務から離れ、カジュアルな環境で同僚と有意義な時間を過ごせます。共に食事をすることで壁が低くなり、オープンなコミュニケーションが生まれ、部署を超えたつながりが深まります。",
    "Monthly Learning Session": "月次ラーニングセッション",
    "The Monthly Learning Session at Cloud Production LTDis a dedicated time for employees to expand their skills and knowledge through workshops, presentations, or discussions. These sessions focus on sharing valuable insights, industry trends, and best practices to help the team stay current and competitive. By encouraging continuous learning and professional growth.": "Cloud Production LTDの月次ラーニングセッションは、ワークショップ、発表、ディスカッションを通じて社員の知識とスキルを広げるための時間です。業界トレンドやベストプラクティスを共有し、チームが常に競争力を維持できるよう支援します。継続学習と専門性向上を促進する取り組みです。",
    "Cloud Production LTD is designed to promote employee well-being, encourage team bonding, and provide opportunities for relaxation and fun. These activities help break the routine, reduce stress, and improve collaboration, contributing to a healthier and more engaging workplace culture.": "Cloud Production LTDの週次活動は、社員のウェルビーイング向上、チームの結束促進、そしてリフレッシュ機会の提供を目的としています。日々のルーティンをほぐし、ストレスを軽減し、協働を高めることで、より健全で活気ある職場文化を育みます。",
    "Outdoor Playing – Cricket": "屋外アクティビティ - クリケット",
    "The Outdoor Playing activity at Cloud Production LTDis a lively weekly event held over the weekend, designed to promote physical health, boost energy, and strengthen teamwork among employees. This refreshing cricket match encourages friendly competition and collaboration, offering a fun way for team members to connect outside the office while staying active and energized.": "Cloud Production LTDの屋外アクティビティは、週末に行われる活気ある週次イベントで、健康促進・活力向上・チームワーク強化を目的としています。クリケットを通じた健全な競争と協力が、オフィス外での自然な交流を生み、メンバーのつながりを深めます。",
    "Indoor Games – Table Tennis": "屋内ゲーム - 卓球",
    "The Indoor Games – Table Tennis at Cloud Production LTDprovide employees with a fun and engaging way to take quick breaks during the workday. Through friendly matches and mini tournaments held inside the office, this activity encourages healthy competition, sharpens focus, and helps relieve stress, all while fostering team spirit and camaraderie in a relaxed setting.": "Cloud Production LTDの屋内ゲーム（卓球）は、業務中の短い休憩を楽しく有意義にする取り組みです。社内でのフレンドリーマッチやミニ大会を通じて、健全な競争、集中力向上、ストレス軽減を実現し、リラックスした雰囲気の中でチームスピリットを育みます。",
    "Festival celebrations bring employees together to recognize traditions, foster a sense of community, and show appreciation. By marking occasions like Eid, Ramadan, and work anniversaries, the company creates an inclusive and joyful environment that values diversity and strengthens team spirit.": "祝祭イベントは、伝統を尊重し、コミュニティ意識を育み、感謝を伝える機会として社員をつなぎます。イード、ラマダン、記念日などを祝うことで、多様性を尊重する包括的で喜びある職場環境をつくり、チームの一体感を強化します。",
    "Eid Gift Distribution": "イードギフト配布",
    "The Eid Gift at Cloud Production LTDis a special celebration that honors the joyous spirit of Eid by giving thoughtful gifts to all employees. This tradition not only spreads festive cheer but also shows appreciation for the team’s hard work and dedication. It strengthens the sense of community and cultural respect within the workplace, making everyone feel valued and connected during this important occasion.": "Cloud Production LTDのイードギフトは、全社員へ心のこもった贈り物を届ける特別な取り組みです。祝祭の喜びを分かち合うだけでなく、日々の努力と貢献への感謝を示します。この伝統は職場での文化的尊重とコミュニティ意識を高め、誰もが大切にされていると感じられる機会となります。",
    "Ramadan Gift Distribution": "ラマダンギフト配布",
    "Cloud Production LTDis a meaningful gesture to honor the holy month of Ramadan by presenting special tokens of appreciation to employees and their families. This celebration reflects the company’s respect for cultural and religious traditions while expressing gratitude for the team’s dedication. It fosters a sense of unity and inclusiveness, strengthening the bond between the organization and its people during this significant time.": "Cloud Production LTDのラマダンギフトは、聖なる月ラマダンを称え、社員とその家族へ感謝の気持ちを届ける意義深い取り組みです。文化・宗教的伝統への敬意と、チームの献身への感謝を示し、重要な時期における一体感と包摂性を高めます。",
    "You're not going to hit a ridiculously long phone menu when you call us. Your email isn't going to the inbox abyss, never to be seen or heard from again. At Cloud Production LTD, we provide the exceptional service and communication we'd want to experience ourselves!": "お電話の際に、延々と続く自動音声メニューにつながることはありません。メールが受信箱の奥深くに埋もれて返信がないままになることもありません。Cloud Production LTDは、私たち自身が受けたいと思う水準の丁寧な対応と確かなコミュニケーションを提供します。",
    "Safe and Secure": "安全で安心",
    "We take IP seriously. You can send us an NDA and we’ll sign it right away.": "知的財産の保護を重視しています。NDAをお送りいただければ、速やかに締結します。",
    "Free": "無料",
    "You'll get a free expert consultation about your project.": "プロジェクトについて、専門家による無料相談をご利用いただけます。",
    "Fast Response": "迅速対応",
    "Our representative will contact you within 24 hours after the request. Usually much quicker.": "お問い合わせ後24時間以内に担当者よりご連絡します。通常はさらに早く対応します。",
    "Get in touch": "お問い合わせ",
    "Your name": "お名前を入力",
    "Last name": "姓を入力",
    "Message": "メッセージ",
    "Tell us about your project or idea.": "プロジェクトやアイデアについてお聞かせください。",
    "Career": "採用情報",
    "Let's grow together!": "一緒に成長しましょう！",
    "We believe in nurturing talent and building futures. Join a collaborative environment where innovation thrives, ideas are valued, and your growth is our priority. Explore exciting opportunities and become part of our journey!": "私たちは、人材を育て未来をつくることを大切にしています。革新が生まれ、アイデアが尊重され、あなたの成長を最優先する協働環境へ参加しませんか。魅力的な機会を見つけ、私たちの挑戦の一員になってください。",
    "All departments": "すべての部門",
    "Software Quality Assurance (SQA)": "ソフトウェア品質保証（SQA）",
    "Technology": "テクノロジー",
    "Admin, Compliance & Corporate Affairs": "管理・コンプライアンス・総務",
    "Marketing": "マーケティング",
    "Business Development": "事業開発",
    "Quality, Performance & Training": "品質・パフォーマンス・トレーニング",
    "All countries": "すべての国",
    "Bangladesh": "バングラデシュ",
    "Japan": "日本",
    "India": "インド",
    "Pakistan": "パキスタン",
    "1 jobs": "求人 1件",
    "Job title": "職種",
    "Work model": "勤務形態",
    "Department": "部門",
    "Location": "勤務地",
    "Apply": "応募",
    "Currently no vacancy available! But feel free to send us your CV — if we find a match, we’ll reach out.": "現在募集ポジションはありませんが、ぜひ履歴書をお送りください。条件に合う機会があればご連絡します。"
  };

  function getReverseTranslations(map) {
    var reversed = {};
    Object.keys(map).forEach(function (key) {
      reversed[map[key]] = key;
    });
    return reversed;
  }

  function normalizeText(value) {
    return value
      .replace(/[\u2018\u2019]/g, "'")
      .replace(/[\u201C\u201D]/g, '"')
      .replace(/\s+/g, " ")
      .trim();
  }

  function createNormalizedMap(map) {
    var normalized = {};
    Object.keys(map).forEach(function (key) {
      normalized[normalizeText(key)] = map[key];
    });
    return normalized;
  }

  var enTranslations = getReverseTranslations(jaTranslations);
  var normalizedJaTranslations = createNormalizedMap(jaTranslations);
  var normalizedEnTranslations = createNormalizedMap(enTranslations);

  function translateTextNodes(translations) {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        if (!node || !node.nodeValue || !node.nodeValue.trim()) {
          return NodeFilter.FILTER_REJECT;
        }
        if (!node.parentElement) {
          return NodeFilter.FILTER_REJECT;
        }
        var tagName = node.parentElement.tagName;
        if (tagName === "SCRIPT" || tagName === "STYLE") {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    var node;
    while ((node = walker.nextNode())) {
      var value = node.nodeValue;
      var trimmed = value.trim();
      if (!trimmed) {
        continue;
      }

      var normalized = normalizeText(trimmed);
      var replacement = translations[trimmed];
      if (!replacement) {
        var normalizedMap = translations === jaTranslations ? normalizedJaTranslations : normalizedEnTranslations;
        replacement = normalizedMap[normalized];
      }
      if (!replacement) {
        continue;
      }

      var leading = value.match(/^\s*/)[0];
      var trailing = value.match(/\s*$/)[0];
      node.nodeValue = leading + replacement + trailing;
    }
  }

  function translateAttributes(translations) {
    var attrNames = ["placeholder", "title", "aria-label"];
    var elements = document.querySelectorAll("[placeholder], [title], [aria-label]");

    elements.forEach(function (el) {
      attrNames.forEach(function (attr) {
        var current = el.getAttribute(attr);
        if (!current) {
          return;
        }

        var normalizedMap = translations === jaTranslations ? normalizedJaTranslations : normalizedEnTranslations;
        var translated = translations[current] || normalizedMap[normalizeText(current)];
        if (translated) {
          el.setAttribute(attr, translated);
        }
      });
    });
  }

  function applyLanguage(lang) {
    var translations = lang === "ja" ? jaTranslations : enTranslations;
    translateTextNodes(translations);
    translateAttributes(translations);
    document.documentElement.lang = lang;
  }

  function detectDefaultLanguage() {
    var saved = localStorage.getItem("preferredLanguage");
    if (saved === "ja" || saved === "en") {
      return saved;
    }

    var timezone = (Intl.DateTimeFormat().resolvedOptions().timeZone || "").toLowerCase();
    var language = (navigator.language || "").toLowerCase();
    var languages = (navigator.languages || []).join(",").toLowerCase();
    var isJapan =
      timezone.indexOf("asia/tokyo") !== -1 ||
      language.indexOf("ja") === 0 ||
      languages.indexOf("ja") !== -1;

    return isJapan ? "ja" : "en";
  }

  function initializeLocalization() {
    var languageSelect = document.getElementById("languageSelect");
    if (!languageSelect) {
      return;
    }

    var initialLanguage = detectDefaultLanguage();
    languageSelect.value = initialLanguage;
    applyLanguage(initialLanguage);

    languageSelect.addEventListener("change", function (event) {
      var selected = event.target.value === "ja" ? "ja" : "en";
      localStorage.setItem("preferredLanguage", selected);
      applyLanguage(selected);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeLocalization);
  } else {
    initializeLocalization();
  }
})();
