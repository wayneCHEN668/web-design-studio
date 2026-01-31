import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Loader2 } from "lucide-react";
import { z } from "zod";

const SUPABASE_URL_INSERT = "https://ewkqkirccdntwwhucswb.supabase.co/functions/v1/heatcompany-insert";
const SUPABASE_INSERT_KEY = "huwehr74ijd83jf8jfurf43eeiei";

const contactSchema = z.object({
  customer_name: z.string().trim().min(1, { message: "请输入姓名" }).max(100, { message: "姓名不能超过100个字符" }),
  customer_email: z.string().trim().email({ message: "请输入有效的邮箱地址" }).max(255, { message: "邮箱不能超过255个字符" }),
  company_name: z.string().trim().min(1, { message: "请输入热力公司名称" }).max(200, { message: "公司名称不能超过200个字符" }),
});

const Contact = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    customer_name: "",
    customer_email: "",
    company_name: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate form data
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(SUPABASE_URL_INSERT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${SUPABASE_INSERT_KEY}`,
          'apikey': SUPABASE_INSERT_KEY,
          'x-api-key': SUPABASE_INSERT_KEY
        },
        body: JSON.stringify(result.data)
      });

      if (!response.ok) {
        throw new Error('提交失败，请稍后重试');
      }

      toast({
        title: "提交成功",
        description: "感谢您的关注，我们会尽快与您联系！",
      });

      // Reset form
      setFormData({
        customer_name: "",
        customer_email: "",
        company_name: "",
      });

      // Navigate back after success
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      toast({
        title: "提交失败",
        description: error instanceof Error ? error.message : "请稍后重试",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-heat-dark flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Button
          variant="ghost"
          className="mb-6 text-primary-foreground/70 hover:text-primary-foreground"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          返回首页
        </Button>

        <Card className="bg-heat-gray border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-primary-foreground">联系我们</CardTitle>
            <CardDescription className="text-primary-foreground/60">
              填写以下信息，我们将尽快与您取得联系
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="customer_name" className="text-primary-foreground">
                  姓名 <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="customer_name"
                  name="customer_name"
                  placeholder="请输入您的姓名"
                  value={formData.customer_name}
                  onChange={handleChange}
                  className="bg-heat-dark border-primary/30 text-primary-foreground placeholder:text-primary-foreground/40"
                />
                {errors.customer_name && (
                  <p className="text-sm text-destructive">{errors.customer_name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="customer_email" className="text-primary-foreground">
                  邮箱 <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="customer_email"
                  name="customer_email"
                  type="email"
                  placeholder="请输入您的邮箱"
                  value={formData.customer_email}
                  onChange={handleChange}
                  className="bg-heat-dark border-primary/30 text-primary-foreground placeholder:text-primary-foreground/40"
                />
                {errors.customer_email && (
                  <p className="text-sm text-destructive">{errors.customer_email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="company_name" className="text-primary-foreground">
                  热力公司名称 <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="company_name"
                  name="company_name"
                  placeholder="请输入热力公司名称"
                  value={formData.company_name}
                  onChange={handleChange}
                  className="bg-heat-dark border-primary/30 text-primary-foreground placeholder:text-primary-foreground/40"
                />
                {errors.company_name && (
                  <p className="text-sm text-destructive">{errors.company_name}</p>
                )}
              </div>

              <Button
                type="submit"
                variant="hero"
                className="w-full mt-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    提交中...
                  </>
                ) : (
                  "提交申请"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Contact;
