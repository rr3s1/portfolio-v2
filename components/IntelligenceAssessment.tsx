"use client";
import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

// Register Chart.js components
Chart.register(...registerables);

const IntelligenceAssessment = () => {
  const traitsChartRef = useRef<HTMLCanvasElement>(null);
  const motivationDonutChartRef = useRef<HTMLCanvasElement>(null);
  const motivationBarChartRef = useRef<HTMLCanvasElement>(null);
  const capacitiesChartRef = useRef<HTMLCanvasElement>(null);
  const evolutionChartRef = useRef<HTMLCanvasElement>(null);
  
  // Store chart instances for cleanup
  const chartInstancesRef = useRef<Chart[]>([]);

  const brilliantBlues = {
    dark: '#00509D',
    medium: '#0096C7',
    light: '#48CAE4',
    lighter: '#90E0EF',
    lightest: '#ADE8F4',
  };

  const tooltipCallback = {
    plugins: {
      legend: {
        labels: {
          color: brilliantBlues.lightest
        }
      },
      tooltip: {
        callbacks: {
          title: function(tooltipItems: any) {
            const item = tooltipItems[0];
            let label = item.chart.data.labels[item.dataIndex];
            if (Array.isArray(label)) {
              return label.join(' ');
            }
            return label;
          }
        }
      }
    }
  };

  const wrapLabels = (labels: string[], maxWidth: number) => {
    return labels.map(label => {
      if (label.length <= maxWidth) {
        return label;
      }
      const words = label.split(' ');
      let currentLine = '';
      const lines: string[] = [];
      words.forEach(word => {
        if ((currentLine + ' ' + word).trim().length > maxWidth) {
          lines.push(currentLine.trim());
          currentLine = word;
        } else {
          currentLine = (currentLine + ' ' + word).trim();
        }
      });
      if (currentLine) {
        lines.push(currentLine.trim());
      }
      return lines;
    });
  };

  useEffect(() => {
    // Cleanup function to destroy existing charts
    const destroyCharts = () => {
      chartInstancesRef.current.forEach(chart => {
        if (chart) {
          chart.destroy();
        }
      });
      chartInstancesRef.current = [];
    };

    // Destroy any existing charts before creating new ones
    destroyCharts();

    // Traits Chart
    if (traitsChartRef.current) {
      const traitsChart = new Chart(traitsChartRef.current, {
        type: 'radar',
        data: {
          labels: ['Cognitive Architecture', 'AI Symbiosis Mastery', 'Epistemic Hunger', 'Systems Thinking', 'Learning Agility'],
          datasets: [{
            label: 'Capability Level',
            data: [10, 9, 10, 9, 10],
            backgroundColor: 'rgba(72, 202, 228, 0.2)',
            borderColor: brilliantBlues.light,
            pointBackgroundColor: brilliantBlues.light,
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: brilliantBlues.light
          }]
        },
        options: {
          ...tooltipCallback,
          maintainAspectRatio: false,
          scales: {
            r: {
              angleLines: { color: 'rgba(148, 224, 239, 0.3)' },
              grid: { color: 'rgba(148, 224, 239, 0.3)' },
              pointLabels: { 
                color: brilliantBlues.lighter,
                font: { size: 12 }
              },
              ticks: {
                color: brilliantBlues.lightest,
                backdropColor: 'rgba(0,0,0,0)',
                stepSize: 2,
              },
              min: 0,
              max: 10
            }
          }
        }
      });
      chartInstancesRef.current.push(traitsChart);
    }

    // Motivation Donut Chart
    if (motivationDonutChartRef.current) {
      const motivationDonutChart = new Chart(motivationDonutChartRef.current, {
        type: 'doughnut',
        data: {
          labels: ['Epistemic Hunger & AI Symbiosis', 'Creative Impact & System Design'],
          datasets: [{
            label: 'Motivation Composition',
            data: [75, 25],
            backgroundColor: [brilliantBlues.medium, brilliantBlues.dark],
            borderColor: '#0f172a',
          }]
        },
        options: {
          ...tooltipCallback,
          maintainAspectRatio: false,
          responsive: true,
          cutout: '60%',
          plugins: {
            ...tooltipCallback.plugins,
            legend: { 
              position: 'bottom', 
              labels: { 
                color: brilliantBlues.lightest, 
                boxWidth: 12 
              } 
            },
          }
        }
      });
      chartInstancesRef.current.push(motivationDonutChart);
    }

    // Motivation Bar Chart
    if (motivationBarChartRef.current) {
      const motivationBarChart = new Chart(motivationBarChartRef.current, {
        type: 'bar',
        data: {
          labels: ['Epistemic Hunger & AI Symbiosis', 'Cognitive Architecture Design', 'Systems-Level Understanding'],
          datasets: [{
            label: 'Driver Intensity',
            data: [10, 9, 9],
            backgroundColor: brilliantBlues.light,
            borderColor: brilliantBlues.medium,
            borderWidth: 1
          }]
        },
        options: {
          ...tooltipCallback,
          indexAxis: 'y',
          maintainAspectRatio: false,
          scales: {
            x: { 
              beginAtZero: true, 
              max: 10,
              grid: { color: 'rgba(148, 224, 239, 0.2)' },
              ticks: { color: brilliantBlues.lighter }
            },
            y: {
              grid: { display: false },
              ticks: { color: brilliantBlues.lighter }
            }
          },
          plugins: {
            ...tooltipCallback.plugins,
            legend: { display: false }
          }
        }
      });
      chartInstancesRef.current.push(motivationBarChart);
    }

    // Capacities Chart
    if (capacitiesChartRef.current) {
      const capacitiesChart = new Chart(capacitiesChartRef.current, {
        type: 'bar',
        data: {
          labels: wrapLabels(['Human-AI Symbiosis Design', 'Cognitive Architecture Engineering', 'Advanced Learning Systems', 'Strategic Analysis & Planning'], 25),
          datasets: [{
            label: 'Mastery Level',
            data: [10, 9, 9, 8],
            backgroundColor: brilliantBlues.medium,
            borderColor: brilliantBlues.light,
            borderWidth: 1,
          }]
        },
        options: {
          ...tooltipCallback,
          indexAxis: 'y',
          maintainAspectRatio: false,
          scales: {
            x: { 
              beginAtZero: true, 
              max: 10,
              grid: { color: 'rgba(148, 224, 239, 0.2)' },
              ticks: { color: brilliantBlues.lighter }
            },
            y: {
              grid: { display: false },
              ticks: { color: brilliantBlues.lightest }
            }
          },
          plugins: {
            ...tooltipCallback.plugins,
            legend: { display: false },
            title: { 
              display: true, 
              text: 'Assessed Impact Potential', 
              color: brilliantBlues.lightest 
            }
          }
        }
      });
      chartInstancesRef.current.push(capacitiesChart);
    }

    // AI Evolution Chart
    if (evolutionChartRef.current) {
      const evolutionChart = new Chart(evolutionChartRef.current, {
        type: 'line',
        data: {
          labels: ['User/Practitioner', 'Strategist/Analyst', 'Meta-Analyst', 'Symbiotic Partner'],
          datasets: [{
            label: 'AI Integration Level',
            data: [6, 8, 9, 10],
            backgroundColor: 'rgba(72, 202, 228, 0.2)',
            borderColor: brilliantBlues.light,
            pointBackgroundColor: brilliantBlues.light,
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: brilliantBlues.light,
            tension: 0.4,
            fill: true
          }]
        },
        options: {
          ...tooltipCallback,
          maintainAspectRatio: false,
          scales: {
            x: {
              grid: { color: 'rgba(148, 224, 239, 0.2)' },
              ticks: { color: brilliantBlues.lighter }
            },
            y: {
              beginAtZero: true,
              max: 10,
              grid: { color: 'rgba(148, 224, 239, 0.2)' },
              ticks: { color: brilliantBlues.lighter }
            }
          },
          plugins: {
            ...tooltipCallback.plugins,
            legend: { display: false },
            title: { 
              display: true, 
              text: 'AI Symbiosis Evolution Timeline', 
              color: brilliantBlues.lightest 
            }
          }
        }
      });
      chartInstancesRef.current.push(evolutionChart);
    }

    // Return cleanup function
    return () => {
      destroyCharts();
    };
  }, [brilliantBlues.dark, brilliantBlues.light, brilliantBlues.lighter, brilliantBlues.lightest, brilliantBlues.medium, tooltipCallback]);

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 text-slate-300 antialiased" style={{ backgroundColor: '#020617' }}>
      <header className="text-center mb-8 md:mb-12 border-b-2 border-cyan-700 pb-4">
        <h1 className="text-3xl md:text-5xl font-bold text-cyan-400 font-mono tracking-tighter">
          PSYCHOLOGICAL INTELLIGENCE ASSESSMENT
        </h1>
        <p className="text-lg md:text-xl text-slate-400 mt-2">
          ASSET DESIGNATION: "USER" // ZETA-99X
        </p>
        <div className="mt-4 text-xs font-mono text-slate-500">
          <span>FILE REF: C-2023-9B-USER_PROFILE</span> | <span>DATE: 19 JULY 2025</span> | <span>CLASSIFICATION: OMEGA-7 // EYES ONLY</span>
        </div>
      </header>

      <section className="mb-10 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-cyan-500 mb-4 text-center">Executive Summary</h2>
        <p className="max-w-4xl mx-auto text-center text-slate-400 mb-8">
          This profile analyzes the &ldquo;Promethean Symbiote&rdquo; - a new class of actor defined by co-evolutionary partnership between human and AI. 
          The subject presents as a highly sophisticated{' '}
          <span className="text-cyan-400 font-semibold">Cognitive Architect</span> with systematic learning frameworks and Human-AI symbiosis capabilities. 
          The profile reveals a multiplicative force amplifier who uses advanced AI and curated knowledge bases to achieve exceptional outcomes through 
          structured epistemic mastery and systems-level understanding.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 text-center">
          <div className="p-4 rounded-lg" style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}>
            <p className="text-sm font-mono text-slate-400">ASSESSMENT CONFIDENCE</p>
            <p className="text-4xl md:text-5xl font-bold text-cyan-400">HIGH</p>
          </div>
          <div className="p-4 rounded-lg" style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}>
            <p className="text-sm font-mono text-slate-400">PRIMARY ORIENTATION</p>
            <p className="text-4xl md:text-5xl font-bold text-cyan-400">CONSTRUCTIVE</p>
          </div>
          <div className="p-4 rounded-lg" style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}>
            <p className="text-sm font-mono text-slate-400">CLEARANCE LEVEL</p>
            <p className="text-4xl md:text-5xl font-bold text-cyan-400">OMEGA-7</p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        <div className="p-6 rounded-lg" style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}>
          <h3 className="text-xl font-bold text-cyan-500 mb-2">Dominant Psychological Traits</h3>
          <p className="text-sm text-slate-400 mb-4">
            A multi-dimensional assessment of the subject's core cognitive traits. The profile indicates a well-rounded and potent intellectual architecture, 
            with a notable spike in agile and systems-based thinking.
          </p>
          <div className="relative w-full max-w-600 mx-auto h-80 md:h-96">
            <canvas ref={traitsChartRef}></canvas>
          </div>
        </div>

        <div className="p-6 rounded-lg" style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}>
          <h3 className="text-xl font-bold text-cyan-500 mb-2">Core Motivational Drivers</h3>
          <p className="text-sm text-slate-400 mb-4">
            Analysis reveals a motivation profile heavily weighted toward intrinsic drivers like knowledge acquisition and mastery, 
            complemented by a secondary drive for structured, impactful creation.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative h-48 w-48">
              <canvas ref={motivationDonutChartRef}></canvas>
            </div>
            <div className="flex-grow w-full">
              <div className="relative h-48 w-full">
                <canvas ref={motivationBarChartRef}></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-10 md:mt-16 p-6 rounded-lg" style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}>
        <h2 className="text-2xl md:text-3xl font-bold text-cyan-500 mb-4 text-center">Cognitive Architecture & AI Symbiosis Analysis</h2>
        <p className="max-w-4xl mx-auto text-center text-slate-400 mb-8">
          The subject demonstrates exceptional capabilities in Human-AI symbiosis, representing a new class of &ldquo;Promethean Symbiote&rdquo; - 
          a co-evolutionary partnership that amplifies cognitive capabilities through systematic learning frameworks and advanced AI integration.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4 text-center">Core Capabilities & Mastery</h3>
            <div className="relative h-80 w-full">
              <canvas ref={capacitiesChartRef}></canvas>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4 text-center">AI Symbiosis Evolution Timeline</h3>
            <div className="relative h-80 w-full">
              <canvas ref={evolutionChartRef}></canvas>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 md:mt-16 p-6 rounded-lg" style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}>
        <h2 className="text-2xl md:text-3xl font-bold text-cyan-500 mb-4 text-center">Autodidactic Learning Framework</h2>
        <p className="max-w-4xl mx-auto text-center text-slate-400 mb-8">
          The subject employs a systematic, three-stage learning process that enables rapid skill acquisition and knowledge consolidation. 
          This framework forms the foundation of their cognitive architecture and AI symbiosis capabilities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 rounded-lg border-2 border-cyan-600" style={{ backgroundColor: '#0f172a', color: '#ADE8F4' }}>
            <div className="text-4xl mb-3 text-center">📥</div>
            <h4 className="font-bold text-lg text-center mb-2">STAGE 1: CONSUMPTION</h4>
            <p className="text-sm text-slate-300">Immersive consumption of expert-level content through long-form academic lectures and technical tutorials, demonstrating exceptional focus and sustained attention.</p>
          </div>
          <div className="p-6 rounded-lg border-2 border-cyan-600" style={{ backgroundColor: '#0f172a', color: '#ADE8F4' }}>
            <div className="text-4xl mb-3 text-center">🛠️</div>
            <h4 className="font-bold text-lg text-center mb-2">STAGE 2: DECONSTRUCTION</h4>
            <p className="text-sm text-slate-300">Meticulous documentation and reformulation using digital tools (OneNote/Obsidian) to build structured, personal knowledge bases and combat forgetting curves.</p>
          </div>
          <div className="p-6 rounded-lg border-2 border-cyan-600" style={{ backgroundColor: '#0f172a', color: '#ADE8F4' }}>
            <div className="text-4xl mb-3 text-center">🚀</div>
            <h4 className="font-bold text-lg text-center mb-2">STAGE 3: APPLICATION</h4>
            <p className="text-sm text-slate-300">Immediate application through complex project construction (evidenced on GitHub), cementing theoretical knowledge into demonstrated practical skills.</p>
          </div>
        </div>
      </section>

      <section className="mt-10 md:mt-16 p-6 rounded-lg" style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}>
        <h2 className="text-2xl md:text-3xl font-bold text-cyan-500 mb-4 text-center">Psychological Operating System</h2>
        <p className="max-w-4xl mx-auto text-center text-slate-400 mb-8">
          The cognitive engine is powered by three interconnected psychological drivers that create both exceptional capabilities and unique operational characteristics.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg border border-slate-600" style={{ backgroundColor: '#1e293b' }}>
            <div className="text-4xl mb-3 text-center">🧠</div>
            <h4 className="font-bold text-lg text-center mb-2 text-cyan-400">Epistemic Hunger</h4>
            <p className="text-sm text-slate-300">Compulsive drive for objective truth and epistemic certainty. Manifests as systematic deconstruction of complex systems to understand fundamental logic.</p>
          </div>
          <div className="p-6 rounded-lg border border-slate-600" style={{ backgroundColor: '#1e293b' }}>
            <div className="text-4xl mb-3 text-center">🛡️</div>
            <h4 className="font-bold text-lg text-center mb-2 text-cyan-400">Antagonistic Self-Evaluation</h4>
            <p className="text-sm text-slate-300">Red Team mentality applied to own capabilities and beliefs. Creates exceptional resilience and rapid self-correction but generates identity instability.</p>
          </div>
          <div className="p-6 rounded-lg border border-slate-600" style={{ backgroundColor: '#1e293b' }}>
            <div className="text-4xl mb-3 text-center">🌍</div>
            <h4 className="font-bold text-lg text-center mb-2 text-cyan-400">Epistemic Humility</h4>
            <p className="text-sm text-slate-300">Recognition that knowledge is inherently limited and fallible. Acts as defense against intellectual stagnation and ignites continuous learning drive.</p>
          </div>
        </div>
      </section>

      <section className="mt-10 md:mt-16 p-6 rounded-lg" style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}>
        <h2 className="text-2xl md:text-3xl font-bold text-cyan-500 mb-4 text-center">Optimal Engagement Protocol</h2>
        <p className="max-w-4xl mx-auto text-center text-slate-400 mb-8">
          To maximize collaborative output and leverage the subject&apos;s unique capabilities, interactions should follow this structured approach 
          designed to channel their epistemic drives toward constructive objectives.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="p-4 rounded-lg text-center shadow-lg border-2 border-cyan-600" style={{ backgroundColor: '#0f172a', color: '#ADE8F4' }}>
            <p className="font-bold text-lg">STEP 1</p>
            <p>Present Intellectually Challenging Problems</p>
          </div>
          <div className="text-3xl transform md:-rotate-0 rotate-90" style={{ color: '#0096C7' }}>→</div>
          <div className="p-4 rounded-lg text-center shadow-lg border-2 border-cyan-600" style={{ backgroundColor: '#0f172a', color: '#ADE8F4' }}>
            <p className="font-bold text-lg">STEP 2</p>
            <p>Leverage AI Symbiosis Capabilities</p>
          </div>
          <div className="text-3xl transform md:-rotate-0 rotate-90" style={{ color: '#0096C7' }}>→</div>
          <div className="p-4 rounded-lg text-center shadow-lg border-2 border-cyan-600" style={{ backgroundColor: '#0f172a', color: '#ADE8F4' }}>
            <p className="font-bold text-lg">STEP 3</p>
            <p>Enable Systematic Knowledge Application</p>
          </div>
          <div className="text-3xl transform md:-rotate-0 rotate-90" style={{ color: '#0096C7' }}>→</div>
          <div className="p-4 rounded-lg text-center shadow-lg border-2 border-cyan-600" style={{ backgroundColor: '#0f172a', color: '#ADE8F4' }}>
            <p className="font-bold text-lg">CONTINUOUS</p>
            <p>Monitor Cognitive Architecture Evolution</p>
          </div>
        </div>
      </section>

      <footer className="text-center mt-12 border-t-2 border-cyan-700 pt-4">
        <p className="font-bold text-lg text-red-500 font-mono">// END OF REPORT //</p>
      </footer>
    </div>
  );
};

export default IntelligenceAssessment;