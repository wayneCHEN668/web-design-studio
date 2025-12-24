import { Headphones, TrendingUp, GraduationCap } from "lucide-react";

const audiences = [
  {
    icon: Headphones,
    title: "一线调度与运维人员",
    description: "不再靠感觉调系统",
  },
  {
    icon: TrendingUp,
    title: "供热公司管理层",
    description: "节能有依据，决策能量化",
  },
  {
    icon: GraduationCap,
    title: "新入行人员",
    description: "快速建立系统级运行认知，少走 3–5 年弯路",
  },
];

const AudienceSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            谁适合用 HeatVision AI？
          </h2>
        </div>
        
        {/* Audience Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="text-center p-8 border-2 border-border bg-card hover:border-primary transition-colors group shadow-card hover:shadow-elevated"
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-primary text-primary-foreground">
                <audience.icon className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-3">
                {audience.title}
              </h3>
              <p className="text-muted-foreground">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
