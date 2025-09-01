import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Target, Lightbulb, BarChart3, Users } from "lucide-react";
import { cn } from "@/lib/utils";
interface Insight {
  id: string;
  type: 'positive' | 'negative' | 'alert' | 'opportunity';
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  category: string;
  icon: React.ElementType;
  value?: string;
}
const insights: Insight[] = [{
  id: '1',
  type: 'positive',
  title: 'Margem EBITDA Excepcional',
  description: 'EBITDA de 24% está 6 pontos acima da média do setor',
  impact: 'high',
  category: 'Rentabilidade',
  icon: TrendingUp,
  value: '+6pp vs setor'
}, {
  id: '2',
  type: 'opportunity',
  title: 'Otimização de CMV',
  description: 'Identificada oportunidade de redução de 2.5% nos custos de matéria-prima',
  impact: 'medium',
  category: 'Custos',
  icon: Target,
  value: 'R$ 191k economia'
}, {
  id: '3',
  type: 'alert',
  title: 'Concentração em Produtos A',
  description: 'Alta dependência (45%) em uma única linha de produtos',
  impact: 'medium',
  category: 'Risco',
  icon: AlertTriangle,
  value: '45% concentração'
}, {
  id: '4',
  type: 'positive',
  title: 'Crescimento Sustentável',
  description: 'Receitas crescendo 8.2% com manutenção das margens',
  impact: 'high',
  category: 'Crescimento',
  icon: BarChart3,
  value: '+8.2% YoY'
}, {
  id: '5',
  type: 'opportunity',
  title: 'Eficiência Administrativa',
  description: 'Despesas administrativas podem ser otimizadas em 1.2%',
  impact: 'low',
  category: 'Eficiência',
  icon: Users,
  value: 'R$ 24k economia'
}];
export const AutoInsights = () => {
  const getInsightColors = (type: string, impact: string) => {
    const colors = {
      positive: {
        bg: 'bg-purple-50 dark:bg-purple-950/20',
        border: 'border-purple-300 dark:border-purple-700',
        icon: 'text-purple-700 dark:text-purple-300',
        badge: 'bg-purple-200 text-purple-900 dark:bg-purple-800 dark:text-purple-200'
      },
      negative: {
        bg: 'bg-violet-50 dark:bg-violet-950/20',
        border: 'border-violet-300 dark:border-violet-700',
        icon: 'text-violet-700 dark:text-violet-300',
        badge: 'bg-violet-200 text-violet-900 dark:bg-violet-800 dark:text-violet-200'
      },
      alert: {
        bg: 'bg-indigo-50 dark:bg-indigo-950/20',
        border: 'border-indigo-300 dark:border-indigo-700',
        icon: 'text-indigo-700 dark:text-indigo-300',
        badge: 'bg-indigo-200 text-indigo-900 dark:bg-indigo-800 dark:text-indigo-200'
      },
      opportunity: {
        bg: 'bg-fuchsia-50 dark:bg-fuchsia-950/20',
        border: 'border-fuchsia-300 dark:border-fuchsia-700',
        icon: 'text-fuchsia-700 dark:text-fuchsia-300',
        badge: 'bg-fuchsia-200 text-fuchsia-900 dark:bg-fuchsia-800 dark:text-fuchsia-200'
      }
    };
    return colors[type as keyof typeof colors] || colors.opportunity;
  };
  const getImpactLabel = (impact: string) => {
    const labels = {
      high: 'Alto Impacto',
      medium: 'Médio Impacto',
      low: 'Baixo Impacto'
    };
    return labels[impact as keyof typeof labels];
  };
  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-primary" />
          <CardTitle className="text-lg">Insights Automatizados</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {insights.map((insight) => {
            const colors = getInsightColors(insight.type, insight.impact);
            const Icon = insight.icon;
            
            return (
              <div
                key={insight.id}
                className={cn(
                  "p-4 rounded-lg border transition-all duration-200 hover:shadow-md",
                  colors.bg,
                  colors.border
                )}
              >
                <div className="flex items-start gap-3">
                  <div className={cn("p-2 rounded-lg", colors.icon)}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-semibold text-sm text-foreground leading-tight">
                        {insight.title}
                      </h4>
                      {insight.value && (
                        <Badge variant="secondary" className={cn("text-xs", colors.badge)}>
                          {insight.value}
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {insight.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {insight.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {getImpactLabel(insight.impact)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};