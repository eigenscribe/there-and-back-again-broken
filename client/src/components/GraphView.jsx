import React, { useEffect, useRef } from 'react';
import ForceGraph2D from 'react-force-graph-2d';

function GraphView({ notes, onNoteSelect }) {
  const graphRef = useRef();

  const graphData = {
    nodes: notes.map(note => ({
      id: note.id,
      name: note.title,
      group: note.group || 'prototypes',
      val: note.linkedNotes.length + 1
    })),
    links: []
  };

  notes.forEach(note => {
    note.linkedNotes.forEach(linkedId => {
      if (!graphData.links.find(link => 
        (link.source === note.id && link.target === linkedId) ||
        (link.source === linkedId && link.target === note.id)
      )) {
        graphData.links.push({
          source: note.id,
          target: linkedId
        });
      }
    });
  });

  const groupColors = {
    prototypes: '#a855f7',
    tutorials: '#14b5ff',
    howto: '#22f792',
    explanations: '#f78166',
    reference: '#fbbf24'
  };

  useEffect(() => {
    if (graphRef.current) {
      graphRef.current.d3Force('charge').strength(-300);
      graphRef.current.d3Force('link').distance(100);
    }
  }, []);

  return (
    <div className="graph-view">
      <div className="graph-header">
        <h1 className="graph-title">Knowledge Graph</h1>
        <p className="graph-subtitle">Explore the connections between your mathematical concepts</p>
      </div>
      
      <div className="graph-container-full">
        <ForceGraph2D
          ref={graphRef}
          graphData={graphData}
          nodeLabel="name"
          nodeVal="val"
          nodeColor={node => groupColors[node.group] || '#14b5ff'}
          nodeCanvasObject={(node, ctx, globalScale) => {
            const label = node.name;
            const fontSize = 12/globalScale;
            ctx.font = `${fontSize}px Aclonica, sans-serif`;
            
            const size = Math.sqrt(node.val) * 4;
            ctx.beginPath();
            ctx.arc(node.x, node.y, size, 0, 2 * Math.PI, false);
            ctx.fillStyle = groupColors[node.group] || '#14b5ff';
            ctx.fill();
            
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.lineWidth = 1.5 / globalScale;
            ctx.stroke();
            
            ctx.shadowBlur = 10;
            ctx.shadowColor = groupColors[node.group] || '#14b5ff';
            ctx.fill();
            ctx.shadowBlur = 0;
            
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            ctx.fillText(label, node.x, node.y + size + fontSize + 2);
          }}
          linkColor={() => 'rgba(20, 181, 255, 0.3)'}
          linkWidth={2}
          backgroundColor="rgba(13, 17, 23, 0.95)"
          onNodeClick={(node) => {
            onNoteSelect(node.id);
          }}
          cooldownTicks={100}
          onEngineStop={() => graphRef.current?.zoomToFit(400)}
        />
      </div>

      <div className="graph-legend">
        <h3>Categories</h3>
        <div className="legend-items">
          <div className="legend-item">
            <span className="legend-color" style={{backgroundColor: groupColors.prototypes}}></span>
            <span>Prototypes</span>
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{backgroundColor: groupColors.tutorials}}></span>
            <span>Tutorials</span>
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{backgroundColor: groupColors.howto}}></span>
            <span>How-to Guides</span>
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{backgroundColor: groupColors.explanations}}></span>
            <span>Explanations</span>
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{backgroundColor: groupColors.reference}}></span>
            <span>Reference</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GraphView;
