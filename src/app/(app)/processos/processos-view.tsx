"use client";

import { useState } from "react";
import { Section, Switch, Badge } from "@/components/ui";

interface Process {
  id: string;
  name: string;
  monogram: string;
  active: boolean;
}

const initialProcesses: Process[] = [
  { id: "ferias", name: "Férias", monogram: "F", active: true },
  { id: "reembolso", name: "Reembolso", monogram: "R", active: true },
  { id: "compras", name: "Compras", monogram: "C", active: true },
  { id: "chamados", name: "Chamados", monogram: "C", active: false },
  { id: "onboarding", name: "Onboarding", monogram: "O", active: true },
];

export function ProcessosView() {
  const [processes, setProcesses] = useState(initialProcesses);

  function toggle(id: string, active: boolean) {
    setProcesses((prev) => prev.map((process) => (process.id === id ? { ...process, active } : process)));
  }

  return (
    <Section title="Seus processos" subtitle="Modelos ativos disponíveis para solicitação">
      <div className="divide-y divide-border">
        {processes.map((process) => (
          <div key={process.id} className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <Badge variant="info">{process.monogram}</Badge>
              <span className="text-sm font-medium text-foreground">{process.name}</span>
            </div>
            <Switch
              id={`process-${process.id}`}
              checked={process.active}
              onChange={(checked) => toggle(process.id, checked)}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
