'use client';

import { motion } from 'framer-motion';
import { Activity, AlertTriangle, CheckCircle2, Cpu, Database, ShieldAlert } from 'lucide-react';
import SectionHeading from './SectionHeading';

const stats = [
  { label: 'Uptime', value: '99.98%', delta: '+0.02%', icon: Activity },
  { label: 'Deploys (30d)', value: '84', delta: '+18%', icon: Cpu },
  { label: 'MTTR', value: '9m', delta: '-24%', icon: AlertTriangle },
  { label: 'Guardrails', value: '42', delta: '+6', icon: ShieldAlert },
];

const incidents = [
  {
    title: 'Consensus drift detected',
    detail: 'Auto-rebalanced validators · 3m recovery',
    status: 'resolved',
  },
  {
    title: 'Vault latency spike',
    detail: 'HSM fallback engaged · 2m recovery',
    status: 'resolved',
  },
  {
    title: 'Pipeline queue saturation',
    detail: 'Concurrency scaled · guardrails active',
    status: 'monitoring',
  },
];

const services = [
  { name: 'Protocol API', status: 'healthy' },
  { name: 'Validator Mesh', status: 'healthy' },
  { name: 'Telemetry Bus', status: 'degraded' },
  { name: 'Secrets Vault', status: 'healthy' },
];

const statusStyles: Record<string, string> = {
  healthy: 'text-emerald-300',
  degraded: 'text-amber-300',
  monitoring: 'text-sky-300',
};

export default function OpsTelemetry() {
  return (
    <section id="ops" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 aurora" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionHeading
          title="Ops Telemetry"
          subtitle="A live-look dashboard of platform health, incident response, and reliability signals."
        />

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="holo-card rounded-3xl p-6"
                  >
                    <div className="flex items-center justify-between">
                      <span className="h-12 w-12 rounded-2xl glass flex items-center justify-center text-white">
                        <Icon size={22} />
                      </span>
                      <span className="text-xs text-emerald-300">{stat.delta}</span>
                    </div>
                    <h3 className="text-3xl font-semibold text-white mt-4">{stat.value}</h3>
                    <p className="text-dark-300 text-sm uppercase tracking-[0.3em] mt-2">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="glass-card rounded-3xl p-8"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-dark-400">Incident feed</p>
                  <h3 className="text-2xl font-semibold text-white mt-2">Recent signals</h3>
                </div>
                <span className="text-xs text-dark-300">Last 24h</span>
              </div>
              <div className="mt-6 space-y-4">
                {incidents.map((incident) => (
                  <div key={incident.title} className="flex items-start gap-4">
                    {incident.status === 'resolved' ? (
                      <CheckCircle2 size={18} className="text-emerald-300 mt-1" />
                    ) : (
                      <AlertTriangle size={18} className="text-amber-300 mt-1" />
                    )}
                    <div>
                      <p className="text-white font-medium">{incident.title}</p>
                      <p className="text-dark-300 text-sm mt-1">{incident.detail}</p>
                    </div>
                    <span className={`ml-auto text-xs uppercase ${statusStyles[incident.status]}`}>
                      {incident.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="holo-card rounded-3xl p-8"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-dark-400">System health</p>
                <h3 className="text-2xl font-semibold text-white mt-2">Live service matrix</h3>
              </div>
              <Database className="text-dark-300" />
            </div>

            <div className="mt-6 space-y-4">
              {services.map((service) => (
                <div key={service.name} className="flex items-center justify-between">
                  <span className="text-white">{service.name}</span>
                  <span className={`text-xs uppercase ${statusStyles[service.status]}`}>{service.status}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 glass rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <ShieldAlert size={18} className="text-emerald-300" />
                <div>
                  <p className="text-white font-medium">Zero critical alerts</p>
                  <p className="text-dark-300 text-sm">Guardrails active · policy checks passing</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
