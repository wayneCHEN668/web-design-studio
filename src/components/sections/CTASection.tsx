import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary border-t-4 border-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            HeatVision AI
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-gradient-heat mb-8">
            让每一次运行调整，都有数据和经验支撑
          </h3>
          
          {/* Value Props */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <span className="text-foreground font-medium">不用成为数据专家</span>
            <span className="hidden sm:block text-muted-foreground">|</span>
            <span className="text-primary font-bold">也能做出专业判断</span>
          </div>
          
          {/* CTA */}
          <Button variant="hero" size="lg" className="group">
            <ExternalLink className="w-5 h-5 mr-2" />
            看看真实分析示例
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
