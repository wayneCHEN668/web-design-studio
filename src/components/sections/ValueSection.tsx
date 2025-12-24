import { MessageSquare, ShieldCheck, Users } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "自然语言交互，而不是复杂操作",
    description: "不需要记指标、不需要找功能，用你熟悉的业务语言，直接提问",
  },
  {
    icon: ShieldCheck,
    title: "数据不出厂，隐私优先",
    description: "原始运行数据全程留在企业内部，AI 只负责理解、推理和分析，不带走数据",
  },
  {
    icon: Users,
    title: "帮助新人，放大老手经验",
    description: "新人少走弯路，老调度的经验，被系统沉淀、复用、放大",
  },
];

const ValueSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            不是多一个系统
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-heat mb-8">
            而是多一位 24 小时在线的「供热运行专家」
          </h2>
          
          {/* Comparison */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12 mb-8">
            <div className="bg-secondary px-6 py-4 border border-border">
              <p className="text-sm text-muted-foreground mb-1">传统平台是：</p>
              <p className="font-semibold text-foreground">「学会了，才能用」</p>
            </div>
            <span className="text-2xl text-muted-foreground">→</span>
            <div className="bg-primary/10 px-6 py-4 border-2 border-primary">
              <p className="text-sm text-primary mb-1">HeatVision AI 是：</p>
              <p className="font-bold text-primary">「用了，就会了」</p>
            </div>
          </div>
        </div>
        
        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-secondary border-2 border-border group-hover:border-primary group-hover:shadow-glow-heat transition-all">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-3 text-lg">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
