const Footer = () => {
  return (
    <footer className="py-8 bg-heat-dark text-primary-foreground/70">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-primary font-bold">HeatVision AI</span>
            <span className="text-primary-foreground/50">|</span>
            <span>热视界</span>
          </div>
          
          <p className="text-sm">
            面向城市集中供热的历史数据智能分析模型
          </p>
          
          <p className="text-sm text-primary-foreground/50">
            © 2024 HeatVision AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
