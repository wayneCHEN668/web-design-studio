import { Zap, Gauge, Wrench, Cloud, Activity, Thermometer, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "节能潜力分析",
    question: "哪些气温下，我的系统能耗明显偏高？",
    answers: [
      "不同室外气温下的合理热单耗基准",
      "哪些气温区间存在明显超耗",
      "每个区间的节能量与总体节能空间",
    ],
    highlight: "让节能不再「平均用力」，而是精准下手",
  },
  {
    icon: Gauge,
    title: "二次流量优化 & 节电潜力",
    question: "二次流量还能不能降？降多少是安全的？",
    answers: [
      "从历史高载热效率工况中识别参考流量",
      "建立外温—供回水温度关系模型",
      "反推出不同外温下的合理运行流量",
    ],
    highlight: "一条可执行、可验证的最佳流量曲线",
  },
  {
    icon: Wrench,
    title: "阀门故障诊断",
    question: "这个阀门是不是有问题？",
    answers: [
      "阀门开度与压差、流量的关联是否异常",
      "Kv 值随时间是否发生异常演变",
      "是运行故障，还是选型匹配度问题",
    ],
    highlight: "避免：不该修的修了，该修的没修",
  },
  {
    icon: Cloud,
    title: "气象关联与负荷响应分析",
    question: "系统真的在「跟着天气走」吗？",
    answers: [
      "量化气温每变化 1℃，用热量的变化幅度",
      "找出「气温相近但用热异常」的工况",
      "判断热源调节是否及时、是否过量",
    ],
    highlight: "让负荷预测和运行调节有数据依据",
  },
  {
    icon: Activity,
    title: "二次载热效率分析",
    question: "水是不是在「空转」？泵是不是白耗电？",
    answers: [
      "分析单位循环水量的输热能力",
      "判断是否长期运行在低载热效率区间",
      "指出是流量冗余，还是水力失衡",
    ],
    highlight: "为泵频优化和系统平衡提供依据",
  },
  {
    icon: Thermometer,
    title: "换热站综合输热比",
    question: "板换状态到底好不好？",
    answers: [
      "判断一次侧热量是否被有效转化",
      "识别结垢、堵塞或保温不良风险",
      "给出是否需要清洗或检查的结论依据",
    ],
    highlight: "避免「凭经验维护」，实现按状态维护",
  },
  {
    icon: BarChart3,
    title: "度日数单耗分析",
    question: "供热效率稳不稳定？舒适性有没有被牺牲？",
    answers: [
      "分析度日数单耗在不同外温下的一致性",
      "判断供热是否存在控制波动",
      "找出运行策略的优化空间",
    ],
    highlight: "让节能不以牺牲舒适性为代价",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            你关心的问题
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-cool">
            它已经帮你想好了
          </h2>
        </div>
        
        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card border-2 border-border hover:border-accent transition-all group shadow-card hover:shadow-elevated"
            >
              {/* Header */}
              <div className="p-6 border-b border-border bg-secondary/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-foreground text-lg">
                    {feature.title}
                  </h3>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                {/* Question */}
                <div className="mb-4">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">你问：</span>
                  <p className="text-foreground font-medium mt-1">
                    {feature.question}
                  </p>
                </div>
                
                {/* Answers */}
                <div className="mb-4">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wide">HeatVision AI 会告诉你：</span>
                  <ul className="mt-2 space-y-2">
                    {feature.answers.map((answer, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                        {answer}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Highlight */}
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-primary">
                    👉 {feature.highlight}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
