const Footer = () => {
  return <footer className="py-8 bg-heat-dark text-primary-foreground/70">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-primary font-bold">HeatVision AI</span>
            <span className="text-primary-foreground/50">|</span>
            <span>热视界</span>
            <span className="text-primary-foreground/50">|</span>
            <span>面向区域供热的历史数据智能分析模型</span>
          </div>
          
          <p className="text-sm">
            京ICP备2026004763
          </p>
          
          <p className="text-sm text-primary-foreground/50">
            © 2024 HeatVision AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;