import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBg})`
    }} />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Brand */}
          <div className="mb-8">
            <span className="inline-block px-4 py-2 border border-primary/50 text-primary font-medium tracking-wide text-lg">
              HeatVision AI
            </span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            用"问问题"的方式
            <br />
            <span className="text-gradient-heat">把供热系统跑到最优</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-4 font-medium">
            不用学系统，不用翻报表
          </p>
          <p className="text-base md:text-lg text-primary-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            像和一位资深供热专家对话一样
            <br className="hidden md:block" />
            一句话，直接得到分析结论和优化建议
          </p>
          
          {/* Features */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 text-sm text-primary-foreground/70">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              面向城市集中供热的历史数据智能分析模型
            </span>
            <span className="hidden sm:block text-primary-foreground/30">|</span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              让"数据驱动供热优化"真正落地到一线运行
            </span>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/examples">
              <Button variant="hero" size="lg" className="group">
                <MessageCircle className="w-5 h-5 mr-2" />
                查看分析示例
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Button variant="heroOutline" size="lg">
              了解更多
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>;
};
export default HeroSection;