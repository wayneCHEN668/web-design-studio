import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Flame, Droplets, Settings2 } from "lucide-react";
import case1 from "@/assets/case1.png";
import case2 from "@/assets/case2.png";
import case3 from "@/assets/case3.png";

const examples = [
  {
    icon: Flame,
    question: "哪些气温下，系统还能进一步节热？",
    image: case1,
    description: "节能潜力分析，精准定位可优化的气温区间",
  },
  {
    icon: Droplets,
    question: "二次用流量还能不能降？",
    image: case2,
    description: "载热效率分析，诊断大流量小温差问题",
  },
  {
    icon: Settings2,
    question: "阀门是不是有问题？",
    image: case3,
    description: "设备故障诊断，快速判断阀门工作状态",
  },
];

const Examples = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                返回首页
              </Button>
            </Link>
            <h1 className="text-lg font-bold text-foreground">
              <span className="text-primary">HeatVision AI</span> 分析示例
            </h1>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-12 md:py-20 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            真实分析示例
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            以下是 HeatVision AI 智能分析助手的真实对话记录，
            展示如何用自然语言问出专业分析结论
          </p>
        </div>
      </section>

      {/* Examples */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16 md:space-y-24">
            {examples.map((example, index) => (
              <div key={index} className="max-w-5xl mx-auto">
                {/* Question Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <example.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                      「{example.question}」
                    </h3>
                    <p className="text-muted-foreground">{example.description}</p>
                  </div>
                </div>

                {/* Screenshot */}
                <div className="rounded-2xl overflow-hidden border border-border shadow-xl bg-card">
                  <img
                    src={example.image}
                    alt={example.question}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-secondary border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            想要这样的分析能力？
          </h3>
          <p className="text-lg text-muted-foreground mb-8">
            HeatVision AI 正在为更多热力企业提供智能分析服务
          </p>
          <Link to="/">
            <Button variant="hero" size="lg">
              了解更多
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 HeatVision AI｜热视界. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Examples;
