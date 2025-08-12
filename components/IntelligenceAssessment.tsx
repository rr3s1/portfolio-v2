"use client";
import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
// Register Chart.js components
Chart.register(...registerables);
const ProfessionalSkillsShowcase = () => {
const traitsChartRef = useRef<HTMLCanvasElement>(null);
const motivationDonutChartRef = useRef<HTMLCanvasElement>(null);
const motivationBarChartRef = useRef<HTMLCanvasElement>(null);
const capacitiesChartRef = useRef<HTMLCanvasElement>(null);
const evolutionChartRef = useRef<HTMLCanvasElement>(null);
const activityChartRef = useRef<HTMLCanvasElement>(null);
const consumptionChartRef = useRef<HTMLCanvasElement>(null);
const toolchainChartRef = useRef<HTMLCanvasElement>(null);
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
// Core Competencies Chart
if (traitsChartRef.current) {
const traitsChart = new Chart(traitsChartRef.current, {
type: 'radar',
data: {
labels: ['Solutions Architecture', 'Collaborative AI Integration', 'Passion for Learning', 'Systems Thinking', 'Learning Agility'],
datasets: [{
label: 'Proficiency Level',
// Mitigated: Scores are no longer all 10s. Shows confidence but also realism and room for growth.
data: [9, 8, 9, 8, 9],
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
// Mitigated: Jargon replaced with professional terms.
labels: ['Continuous Learning & Growth', 'Building Impactful Solutions'],
datasets: [{
label: 'Motivation Composition',
data: [65, 35],
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
// Mitigated: Jargon replaced.
labels: ['Deepening Technical Knowledge', 'Architecting New Systems', 'Solving Complex Problems'],
datasets: [{
label: 'Driver Intensity',
// Mitigated: Scores are realistic.
data: [9, 8, 8],
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
labels: wrapLabels(['AI-Enhanced Application Design', 'Full-Stack Development', 'Advanced Learning Systems', 'Strategic Analysis & Planning'], 25),
datasets: [{
label: 'Mastery Level',
// Mitigated: Scores are realistic.
data: [9, 8, 8, 7],
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
text: 'Demonstrated Capabilities',
color: brilliantBlues.lightest
}
}
}
});
chartInstancesRef.current.push(capacitiesChart);
}
// Career Evolution Chart
if (evolutionChartRef.current) {
const evolutionChart = new Chart(evolutionChartRef.current, {
type: 'line',
data: {
// Mitigated: Grandiose labels replaced with standard career progression.
labels: ['Practitioner', 'Analyst', 'Architect', 'Strategic Contributor'],
datasets: [{
label: 'Professional Growth',
// Mitigated: Data shows growth, not a perfect endpoint.
data: [6, 7, 8, 9],
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
text: 'Career Progression & AI Integration',
color: brilliantBlues.lightest
}
}
}
});
chartInstancesRef.current.push(evolutionChart);
}
// Daily Activity Chart
if (activityChartRef.current) {
const activityChart = new Chart(activityChartRef.current, {
type: 'bar',
data: {
labels: ['8-Hour Workday', '12-Hour Active Day', '24-Hour Day'],
datasets: [{
label: 'Pages Per Hour',
data: [49.5, 33, 16.5],
backgroundColor: [brilliantBlues.medium, brilliantBlues.light, brilliantBlues.lighter],
borderColor: brilliantBlues.dark,
borderWidth: 1
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
grid: { color: 'rgba(148, 224, 239, 0.2)' },
ticks: { color: brilliantBlues.lighter }
}
},
plugins: {
...tooltipCallback.plugins,
legend: { display: false },
title: {
// Mitigated: "Hyperactive" title removed. Reframed to be about dedication.
display: true,
text: 'Focused Work & Learning Patterns',
color: brilliantBlues.lightest
}
}
}
});
chartInstancesRef.current.push(activityChart);
}
if (consumptionChartRef.current) {
const consumptionChart = new Chart(consumptionChartRef.current, {
type: 'doughnut',
data: {
labels: ['Educational/Technical', 'Cultural/Artistic', 'News/Political', 'Entertainment', 'Other'],
datasets: [{
label: 'Content Distribution',
data: [22.7, 3.3, 2.1, 1.5, 70.4],
backgroundColor: [
brilliantBlues.medium,
brilliantBlues.light,
brilliantBlues.lighter,
brilliantBlues.lightest,
'rgba(148, 224, 239, 0.3)'
],
borderColor: '#0f172a',
borderWidth: 2
}]
},
options: {
...tooltipCallback,
maintainAspectRatio: false,
responsive: true,
cutout: '50%',
plugins: {
...tooltipCallback.plugins,
legend: {
position: 'bottom',
labels: {
color: brilliantBlues.lightest,
boxWidth: 10,
font: { size: 10 }
}
},
title: {
display: true,
text: 'Content Consumption for Continuous Learning',
color: brilliantBlues.lightest
}
}
}
});
chartInstancesRef.current.push(consumptionChart);
}
if (toolchainChartRef.current) {
const toolchainChart = new Chart(toolchainChartRef.current, {
type: 'bar',
data: {
labels: ['GitHub', 'ChatGPT', 'Localhost', 'AI Studio', 'NotebookLM', 'Other'],
datasets: [{
label: 'Usage %',
data: [68.4, 14.5, 8.5, 4.9, 1.0, 2.7],
backgroundColor: [
brilliantBlues.dark,
brilliantBlues.medium,
brilliantBlues.light,
brilliantBlues.lighter,
brilliantBlues.lightest,
'rgba(148, 224, 239, 0.5)'
],
borderColor: brilliantBlues.dark,
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
max: 80,
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
legend: { display: false },
title: {
display: true,
text: 'AI & Development Toolchain',
color: brilliantBlues.lightest
}
}
}
});
chartInstancesRef.current.push(toolchainChart);
}
return () => {
destroyCharts();
};
}, [brilliantBlues.dark, brilliantBlues.light, brilliantBlues.lighter, brilliantBlues.lightest, brilliantBlues.medium, tooltipCallback]);
return (
<div className="max-w-7xl mx-auto p-4 md:p-8 text-slate-300 antialiased" style={{ backgroundColor: '#020617' }}>
<header className="text-center mb-8 md:mb-12 border-b-2 border-cyan-700 pb-4">
<h1 className="text-3xl md:text-5xl font-bold text-cyan-400 font-mono tracking-tighter">
JOHN DOE // TECHNICAL SKILLS & PROJECT SHOWCASE
</h1>
<p className="text-lg md:text-xl text-slate-400 mt-2">
An AI-Augmented Developer focused on building scalable, impactful solutions.
</p>
<div className="mt-4 text-xs font-mono text-slate-500">
<span>LAST UPDATED: OCTOBER 2023</span>
</div>
</header>
<section className="mb-10 md:mb-16">
    <h2 className="text-2xl md:text-3xl font-bold text-cyan-500 mb-4 text-center">Professional Summary</h2>
    <p className="max-w-4xl mx-auto text-center text-slate-400 mb-8">
      This profile showcases my skills as a creative <span className="text-cyan-400 font-semibold">Solutions Architect</span> and developer.
      I thrive in collaborative environments where I can leverage AI tools and a systematic learning approach to tackle complex challenges.
      My goal is to contribute to team success by building robust, well-engineered applications and driving innovation through a deep understanding of technology.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 text-center">
      <a href="#" target="_blank" rel="noopener noreferrer" className="p-4 rounded-lg hover:bg-slate-800 transition-colors" style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}>
        <p className="text-sm font-mono text-slate-400">VIEW MY CODE</p>
        <p className="text-3xl md:text-4xl font-bold text-cyan-400">GITHUB</p>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer" className="p-4 rounded-lg hover:bg-slate-800 transition-colors" style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}>
        <p className="text-sm font-mono text-slate-400">SEE MY WORK</p>
        <p className="text-3xl md:text-4xl font-bold text-cyan-400">PORTFOLIO</p>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer" className="p-4 rounded-lg hover:bg-slate-800 transition-colors" style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}>
        <p className="text-sm font-mono text-slate-400">CONNECT WITH ME</p>
        <p className="text-3xl md:text-4xl font-bold text-cyan-400">LINKEDIN</p>
      </a>
    </div>
  </section>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
    <div className="p-6 rounded-lg" style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}>
code
Code
<h3 className="text-xl font-bold text-cyan-500 mb-2">Core Competencies</h3>
  <p className="text-sm text-slate-400 mb-4">
    A multi-dimensional view of my primary skill areas. I focus on a blend of architectural thinking, hands-on development, and continuous learning.
  </p>
  <div className="relative w-full max-w-600 mx-auto h-80 md:h-96">
    <canvas ref={traitsChartRef}></canvas>
  </div>
</div>

<div className="p-6 rounded-lg" style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}>
  <h3 className="text-xl font-bold text-cyan-500 mb-2">Key Motivational Drivers</h3>
  <p className="text-sm text-slate-400 mb-4">
    My motivation is fueled by a passion for continuous learning and a drive to apply that knowledge to build meaningful, high-impact products.
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
    <h2 className="text-2xl md:text-3xl font-bold text-cyan-500 mb-4 text-center">Technical Skills & Professional Growth</h2>
    <p className="max-w-4xl mx-auto text-center text-slate-400 mb-8">
        This section outlines my core technical capabilities and my commitment to evolving my skills by integrating advanced tools and methodologies into my workflow.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-semibold text-cyan-400 mb-4 text-center">Core Capabilities</h3>
        <div className="relative h-80 w-full">
          <canvas ref={capacitiesChartRef}></canvas>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-cyan-400 mb-4 text-center">Career & Skills Progression</h3>
        <div className="relative h-80 w-full">
          <canvas ref={evolutionChartRef}></canvas>
        </div>
      </div>
    </div>
  </section>
  <section className="mt-10 md:mt-16 p-6 rounded-lg" style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}>
    <h2 className="text-2xl md:text-3xl font-bold text-cyan-500 mb-4 text-center">Teamwork & Collaboration Philosophy</h2>
    <p className="max-w-4xl mx-auto text-center text-slate-400 mb-8">
      I believe that the best products are built by collaborative teams. My approach is centered on clear communication, shared goals and mutual respect.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="p-6 rounded-lg border-2 border-cyan-600 text-center" style={{ backgroundColor: '#0f172a', color: '#ADE8F4' }}>
        <div className="text-4xl mb-3">💬</div>
        <h4 className="font-bold text-lg mb-2">Clear Communication</h4>
        <p className="text-sm text-slate-300">Prioritizing concise, jargon-free communication to ensure alignment and build a shared understanding across the team.</p>
      </div>
      <div className="p-6 rounded-lg border-2 border-cyan-600 text-center" style={{ backgroundColor: '#0f172a', color: '#ADE8F4' }}>
        <div className="text-4xl mb-3">🤝</div>
        <h4 className="font-bold text-lg mb-2">Shared Ownership</h4>
        <p className="text-sm text-slate-300">Actively participating in code reviews, providing constructive feedback and taking collective responsibility for project success.</p>
      </div>
      <div className="p-6 rounded-lg border-2 border-cyan-600 text-center" style={{ backgroundColor: '#0f172a', color: '#ADE8F4' }}>
        <div className="text-4xl mb-3">🌱</div>
        <h4 className="font-bold text-lg mb-2">Mentorship & Growth</h4>
        <p className="text-sm text-slate-300">Enthusiastic about both mentoring others and being mentored, fostering an environment of continuous learning for the entire team.</p>
      </div>
    </div>
  </section>
  <section className="mt-10 md:mt-16 p-6 rounded-lg" style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}>
    <h2 className="text-2xl md:text-3xl font-bold text-cyan-500 mb-4 text-center">My Learning & Application Framework</h2>
    <p className="max-w-4xl mx-auto text-center text-slate-400 mb-8">
      I use a structured, three-stage process to rapidly acquire new skills and translate them into practical, project-based outcomes. The emphasis is always on application and delivery.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="p-6 rounded-lg border-2 border-cyan-600" style={{ backgroundColor: '#0f172a', color: '#ADE8F4' }}>
        <div className="text-4xl mb-3 text-center">📥</div>
        <h4 className="font-bold text-lg text-center mb-2">STAGE 1: IMMERSION</h4>
        <p className="text-sm text-slate-300">Focused consumption of expert-level content, from technical documentation to academic research, to build foundational knowledge.</p>
      </div>
      <div className="p-6 rounded-lg border-2 border-cyan-600" style={{ backgroundColor: '#0f172a', color: '#ADE8F4' }}>
        <div className="text-4xl mb-3 text-center">🛠️</div>
        <h4 className="font-bold text-lg text-center mb-2">STAGE 2: SYNTHESIS</h4>
        <p className="text-sm text-slate-300">Structuring new information into personal knowledge bases (using tools like Obsidian) to identify key patterns and concepts.</p>
      </div>
      <div className="p-6 rounded-lg border-2 border-cyan-600" style={{ backgroundColor: '#0f172a', color: '#ADE8F4' }}>
        <div className="text-4xl mb-3 text-center">🚀</div>
        <h4 className="font-bold text-lg text-center mb-2">STAGE 3: APPLICATION</h4>
        <p className="text-sm text-slate-300">The most critical stage: applying knowledge by building and shipping complex projects, turning theory into tangible, demonstrable skills.</p>
      </div>
    </div>
  </section>
  <section className="mt-10 md:mt-16 p-6 rounded-lg" style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}>
    <h2 className="text-2xl md:text-3xl font-bold text-cyan-500 mb-4 text-center">Data-Informed Skill Development</h2>
    <p className="max-w-4xl mx-auto text-center text-slate-400 mb-6">
      I leverage a high volume of information to stay ahead of industry trends, discover cross-domain insights, and continuously refine my technical skills. This data illustrates my commitment to lifelong learning.
    </p>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-8">
      <div>
        <h4 className="font-semibold text-cyan-300 mb-3 text-center">Focused Work & Learning Patterns</h4>
        <div className="relative h-72 w-full">
          <canvas ref={activityChartRef}></canvas>
        </div>
      </div>
      <div>
        <h4 className="font-semibold text-cyan-300 mb-3 text-center">Content Consumption for Learning</h4>
        <div className="relative h-72 w-full">
          <canvas ref={consumptionChartRef}></canvas>
        </div>
      </div>
    </div>
    <div className="p-6 rounded-lg" style={{ backgroundColor: '#1e293b' }}>
      <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">Key Development Toolchain</h3>
      <p className="text-sm text-slate-400 mb-4 text-center">
        My workflow is heavily optimized with a suite of development and AI tools that function as a force multiplier for productivity and code quality.
      </p>
      <div className="relative h-64 w-full">
        <canvas ref={toolchainChartRef}></canvas>
      </div>
    </div>
  </section>
  <section className="mt-10 md:mt-16 p-6 rounded-lg" style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}>
    <h2 className="text-2xl md:text-3xl font-bold text-cyan-500 mb-4 text-center">Ideal Collaborative Environment</h2>
    <p className="max-w-4xl mx-auto text-center text-slate-400 mb-8">
      I do my best work when I can partner with a talented team on meaningful challenges. My ideal process for creating value together is as follows:
    </p>
    <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
      <div className="p-4 rounded-lg text-center shadow-lg border-2 border-cyan-600" style={{ backgroundColor: '#0f172a', color: '#ADE8F4' }}>
        <p className="font-bold text-lg">STEP 1</p>
        <p>Define Intellectually Stimulating Problems</p>
      </div>
      <div className="text-3xl transform md:-rotate-0 rotate-90" style={{ color: '#0096C7' }}>→</div>
      <div className="p-4 rounded-lg text-center shadow-lg border-2 border-cyan-600" style={{ backgroundColor: '#0f172a', color: '#ADE8F4' }}>
        <p className="font-bold text-lg">STEP 2</p>
        <p>Collaborate on High-Impact Solutions</p>
      </div>
      <div className="text-3xl transform md:-rotate-0 rotate-90" style={{ color: '#0096C7' }}>→</div>
      <div className="p-4 rounded-lg text-center shadow-lg border-2 border-cyan-600" style={{ backgroundColor: '#0f172a', color: '#ADE8F4' }}>
        <p className="font-bold text-lg">STEP 3</p>
        <p>Enable Systematic Application & Delivery</p>
      </div>
      <div className="text-3xl transform md:-rotate-0 rotate-90" style={{ color: '#0096C7' }}>→</div>
      <div className="p-4 rounded-lg text-center shadow-lg border-2 border-cyan-600" style={{ backgroundColor: '#0f172a', color: '#ADE8F4' }}>
        <p className="font-bold text-lg">CONTINUOUS</p>
        <p>Iterate Based on Team Feedback</p>
      </div>
    </div>
  </section>
  <section className="mt-10 md:mt-16 p-6 rounded-lg" style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}>
    <h2 className="text-2xl md:text-3xl font-bold text-cyan-500 mb-4 text-center">Intelligence Assessment & Data Foundation</h2>
    <p className="max-w-4xl mx-auto text-center text-slate-400 mb-8">
      This comprehensive analysis is grounded in empirical data from a 1,160,132-line JSON file representing Chrome browser history, 
      analyzed using command-line tools to extract behavioral patterns and workflow insights.
    </p>
code
Code
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
  <div className="p-6 rounded-lg" style={{ backgroundColor: '#1e293b' }}>
    <h3 className="text-xl font-bold text-cyan-400 mb-4">Data Foundation & Methodology</h3>
    <div className="space-y-4 text-sm text-slate-300">
      <div>
        <h4 className="font-semibold text-cyan-300 mb-2">Primary Digital Footprint Analysis</h4>
        <ul className="list-disc list-inside space-y-1 text-slate-400">
          <li><strong>Information Consumption:</strong> YouTube dominance (32,043 visits)</li>
          <li><strong>Professional Development:</strong> GitHub primary focus (19,697 visits)</li>
          <li><strong>AI Augmentation:</strong> Multi-platform approach (ChatGPT: 4,165, AI Studio: 1,409)</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-cyan-300 mb-2">Analytical Limitations</h4>
        <p className="text-slate-400">Chrome-only data excluding mobile usage. Inferences based on frequency patterns with specified confidence levels.</p>
      </div>
    </div>
  </div>

  <div className="p-6 rounded-lg" style={{ backgroundColor: '#1e293b' }}>
    <h3 className="text-xl font-bold text-cyan-400 mb-4">AI Collaboration Matrix</h3>
    <div className="space-y-3 text-sm text-slate-300">
      <div className="flex justify-between">
        <span>GitHub Sessions:</span>
        <span className="text-cyan-300">19,697 (68.4%)</span>
      </div>
      <div className="flex justify-between">
        <span>ChatGPT Sessions:</span>
        <span className="text-cyan-300">4,165 (14.5%)</span>
      </div>
      <div className="flex justify-between">
        <span>Localhost Development:</span>
        <span className="text-cyan-300">2,435 (8.5%)</span>
      </div>
      <div className="flex justify-between">
        <span>AI Studio:</span>
        <span className="text-cyan-300">1,409 (4.9%)</span>
      </div>
      <div className="flex justify-between">
        <span>NotebookLM:</span>
        <span className="text-cyan-300">299 (1.0%)</span>
      </div>
    </div>
  </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
  <div className="p-6 rounded-lg border-2 border-cyan-600" style={{ backgroundColor: '#0f172a' }}>
    <h4 className="font-bold text-lg text-cyan-400 mb-3">AI Tool Specialization</h4>
    <div className="space-y-3 text-sm text-slate-300">
      <div>
        <strong className="text-cyan-300">NotebookLM:</strong>
        <p>Document Analysis Specialist - 52 consecutive sessions for complex document processing</p>
      </div>
      <div>
        <strong className="text-cyan-300">AI Studio:</strong>
        <p>Prompt Engineering Hub - 18 consecutive sessions for advanced model experimentation</p>
      </div>
      <div>
        <strong className="text-cyan-300">ChatGPT:</strong>
        <p>Primary AI Assistant - General-purpose cognitive augmentation with Sora integration</p>
      </div>
    </div>
  </div>

  <div className="p-6 rounded-lg border-2 border-cyan-600" style={{ backgroundColor: '#0f172a' }}>
    <h4 className="font-bold text-lg text-cyan-400 mb-3">Workflow Integration</h4>
    <div className="space-y-3 text-sm text-slate-300">
      <div>
        <strong className="text-cyan-300">Cross-Platform Validation:</strong>
        <p>4-6 transitions between AI tools for verification and optimization</p>
      </div>
      <div>
        <strong className="text-cyan-300">Research-to-Code Pipeline:</strong>
        <p>8 AI-to-GitHub transitions showing seamless implementation flow</p>
      </div>
      <div>
        <strong className="text-cyan-300">Development Environment:</strong>
        <p>15+ localhost ports with Port 3000 dominance (1,338 sessions)</p>
      </div>
    </div>
  </div>

  <div className="p-6 rounded-lg border-2 border-cyan-600" style={{ backgroundColor: '#0f172a' }}>
    <h4 className="font-bold text-lg text-cyan-400 mb-3">Efficiency Patterns</h4>
    <div className="space-y-3 text-sm text-slate-300">
      <div>
        <strong className="text-cyan-300">Deep Focus Capability:</strong>
        <p>83% consecutive GitHub sessions indicate low context switching</p>
      </div>
      <div>
        <strong className="text-cyan-300">AI Tool Clustering:</strong>
        <p>52 consecutive NotebookLM sessions show sustained analytical work</p>
      </div>
      <div>
        <strong className="text-cyan-300">Workflow Optimization:</strong>
        <p>Specialized task routing across different AI platforms</p>
      </div>
    </div>
  </div>
</div>

<div className="p-6 rounded-lg mb-8" style={{ backgroundColor: '#1e293b' }}>
  <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">Augmented Cognition Assessment</h3>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <div>
      <h4 className="font-semibold text-cyan-300 mb-3">AI as Force Multiplier Evidence</h4>
      <ul className="list-disc list-inside space-y-2 text-sm text-slate-400">
        <li>Sophisticated AI orchestration across multiple platforms</li>
        <li>Cross-platform validation for complex problem-solving</li>
        <li>Specialized task routing to optimize cognitive load</li>
        <li>Research-to-implementation pipeline integration</li>
        <li>Advanced prompt engineering workflows</li>
      </ul>
    </div>
    <div>
      <h4 className="font-semibold text-cyan-300 mb-3">Independence Indicators</h4>
      <ul className="list-disc list-inside space-y-2 text-sm text-slate-400">
        <li>19,697 GitHub sessions showing substantial independent work</li>
        <li>Complex development environment management (15+ ports)</li>
        <li>Multi-project orchestration capabilities</li>
        <li>Sophisticated technical infrastructure setup</li>
        <li>Advanced development workflow patterns</li>
      </ul>
    </div>
  </div>
</div>

<div className="p-6 rounded-lg" style={{ backgroundColor: '#1e293b' }}>
  <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">Strategic Assessment & Optimization</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <h4 className="font-semibold text-cyan-300 mb-3">Workflow Strengths</h4>
      <ul className="list-disc list-inside space-y-2 text-sm text-slate-400">
        <li>Multi-platform AI orchestration for cross-validation</li>
        <li>Seamless research-to-implementation pipeline</li>
        <li>Deep focus capability with minimal context switching</li>
        <li>Advanced development environment sophistication</li>
        <li>Specialized AI tool usage for optimal task routing</li>
      </ul>
    </div>
    <div>
      <h4 className="font-semibold text-cyan-300 mb-3">Optimization Opportunities</h4>
      <ul className="list-disc list-inside space-y-2 text-sm text-slate-400">
        <li>Consolidate 15+ localhost environments to 5 core setups</li>
        <li>Reduce AI platform switching decision overhead</li>
        <li>Implement structured project context management</li>
        <li>Balance AI augmentation with independent problem-solving</li>
        <li>Standardize authentication across development environments</li>
      </ul>
    </div>
  </div>
</div>

<div className="mt-8 p-6 rounded-lg border-2 border-cyan-500" style={{ backgroundColor: '#0f172a' }}>
  <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">Strategic Conclusion</h3>
  <p className="text-center text-slate-300 mb-4">
    Analysis reveals a <strong className="text-cyan-300">"Sophisticated AI-Augmented Developer"</strong> profile with exceptional AI integration capabilities.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
    <div className="p-4 rounded-lg" style={{ backgroundColor: '#1e293b' }}>
      <div className="text-3xl mb-2">🤖</div>
      <h4 className="font-bold text-cyan-300 mb-2">AI Force Multiplier</h4>
      <p className="text-sm text-slate-400">Advanced multi-platform orchestration enabling sophisticated analytical and development capabilities</p>
    </div>
    <div className="p-4 rounded-lg" style={{ backgroundColor: '#1e293b' }}>
      <div className="text-3xl mb-2">⚡</div>
      <h4 className="font-bold text-cyan-300 mb-2">Workflow Efficiency</h4>
      <p className="text-sm text-slate-400">Deep focus patterns with 83% consecutive sessions and specialized tool usage optimization</p>
    </div>
    <div className="p-4 rounded-lg" style={{ backgroundColor: '#1e293b' }}>
      <div className="text-3xl mb-2">🎯</div>
      <h4 className="font-bold text-cyan-300 mb-2">Strategic Growth</h4>
      <p className="text-sm text-slate-400">Clear optimization pathways for enhanced efficiency while maintaining cognitive independence</p>
    </div>
  </div>
</div>
  </section>
  <footer className="text-center mt-12 border-t-2 border-cyan-700 pt-4">
    <p className="font-bold text-lg text-cyan-400 font-mono">Thank you for reviewing my profile.</p>
    <p className="text-slate-400 mt-2">I look forward to discussing how my skills can benefit your team.</p>
  </footer>
</div>
);
};
export default ProfessionalSkillsShowcase;