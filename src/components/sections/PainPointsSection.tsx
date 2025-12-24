import { Flame, Droplets, Settings2, ThermometerSun } from "lucide-react";

const painPoints = [
  {
    icon: Flame,
    question: "我想节能，但从哪里入手才真正有效？",
    detail: "哪些气温段在白白烧钱？节能空间到底有多大？",
  },
  {
    icon: Droplets,
    question: "我想节电，二次流量怎么降才不影响供热质量？",
    detail: "流量是不是已经过大？降了会不会投诉？",
  },
  {
    icon: Settings2,
    question: "这个热力站是不是有阀门故障？",
    detail: "是阀门坏了，还是选型本来就不合适？",
  },
  {
    icon: ThermometerSun,
    question: "板式换热器到底要不要清洗？",
    detail: "是感觉不行，还是数据已经说明效率在下降？",
  },
];

const PainPointsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            你是不是每天都在想这些问题？
          </h2>
          <p className="text-lg text-muted-foreground border-l-4 border-primary pl-4 text-left inline-block">
            系统里有数据，但答案并不清楚
          </p>
        </div>
        
        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="bg-card p-6 border-2 border-border hover:border-primary transition-colors group shadow-card"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                  <point.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {point.question}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {point.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Value Statement */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-block bg-heat-dark text-primary-foreground px-8 py-6">
            <p className="text-lg font-semibold mb-2">
              HeatVision AI 的价值只有一个：
            </p>
            <p className="text-xl text-primary font-bold">
              👉 你直接问问题，它给你结论和依据
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
