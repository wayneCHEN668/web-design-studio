import { Upload, Cpu, FileText } from "lucide-react";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "上传历史运行数据",
    description: "支持分钟 / 小时 / 日数据，支持气象数据、建筑台账（Excel / CSV）",
  },
  {
    icon: Cpu,
    step: "02",
    title: "AI 自动处理",
    description: "多源数据清洗与时序对齐，数据关联建模与专业算法计算",
  },
  {
    icon: FileText,
    step: "03",
    title: "获得结论",
    description: "用你能看懂的语言给出结论，你看到的是「答案」，而不是计算过程",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-heat-dark text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            一句话的背后
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-heat">
            是完整的数据分析流程
          </h2>
        </div>
        
        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center group">
                {/* Step Number */}
                <div className="text-6xl font-bold text-primary/20 absolute -top-8 left-1/2 -translate-x-1/2">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="relative z-10 w-20 h-20 mx-auto mb-6 flex items-center justify-center border-2 border-primary bg-primary/10 group-hover:bg-primary transition-colors">
                  <step.icon className="w-10 h-10 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                
                {/* Content */}
                <h3 className="font-bold text-lg mb-3 text-primary-foreground">
                  {step.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  {step.description}
                </p>
                
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Summary */}
        <div className="max-w-2xl mx-auto text-center mt-16">
          <p className="text-lg font-medium">
            你只需要做一件事：
            <span className="text-primary font-bold">上传历史运行数据</span>
          </p>
          <p className="text-primary-foreground/70 mt-4">
            其余的，HeatVision AI 自动完成
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
