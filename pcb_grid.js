/* 
@version: v0.2.0

a basic starter design 
*/

/* -- DECLARE_PCB -- */
const board = new PCB();

/* -- DECLARE_COMPONENTS -- */
const R_1206 = footprint({ "1": { "shape": "M -0.032,0.034L 0.032,0.034L 0.032,-0.034L -0.032,-0.034L -0.032,0.034", "pos": [-0.06, 0], "layers": ["F.Cu", "F.Mask"], "index": 1 }, "2": { "shape": "M -0.032,0.034L 0.032,0.034L 0.032,-0.034L -0.032,-0.034L -0.032,0.034", "pos": [0.06, 0], "layers": ["F.Cu", "F.Mask"], "index": 2 } });
const LED_1206 = footprint({ "A": { "shape": "M -0.037,0.034L 0.027,0.034L 0.027,-0.034L -0.037,-0.034L -0.037,0.034", "pos": [-0.055, 0], "layers": ["F.Cu", "F.Mask"], "index": 1 }, "C": { "shape": "M -0.027,0.034L 0.037,0.034L 0.037,-0.034L -0.027,-0.034L -0.027,0.034", "pos": [0.055, 0], "layers": ["F.Cu", "F.Mask"], "index": 2 } });
const SAMD11C = footprint({ "A05": { "shape": "M 0.03,0.015L -0.03,0.015L -0.0305,0.015L -0.031,0.015L -0.0321,0.0149L -0.0331,0.0147L -0.0336,0.0146L -0.0347,0.0142L -0.0356,0.0139L -0.0361,0.0137L -0.0366,0.0135L -0.0371,0.0132L -0.0375,0.013L -0.038,0.0127L -0.0384,0.0125L -0.0392,0.0118L -0.0396,0.0115L -0.0401,0.0112L -0.0412,0.0101L -0.0415,0.0096L -0.0418,0.0092L -0.0425,0.0084L -0.0427,0.008L -0.043,0.0075L -0.0432,0.0071L -0.0435,0.0066L -0.0437,0.0061L -0.0439,0.0056L -0.0442,0.0047L -0.0446,0.0036L -0.0447,0.0031L -0.0449,0.0021L -0.045,0.001L -0.045,-0.001L -0.0449,-0.0021L -0.0447,-0.0031L -0.0446,-0.0036L -0.0442,-0.0047L -0.0439,-0.0056L -0.0437,-0.0061L -0.0435,-0.0066L -0.0432,-0.0071L -0.043,-0.0075L -0.0427,-0.008L -0.0425,-0.0084L -0.0418,-0.0092L -0.0415,-0.0096L -0.0412,-0.0101L -0.0401,-0.0112L -0.0396,-0.0115L -0.0392,-0.0118L -0.0384,-0.0125L -0.038,-0.0127L -0.0375,-0.013L -0.0371,-0.0132L -0.0366,-0.0135L -0.0361,-0.0137L -0.0356,-0.0139L -0.0347,-0.0142L -0.0336,-0.0146L -0.0331,-0.0147L -0.0321,-0.0149L -0.031,-0.015L 0.03,-0.015L 0.03,0.015", "pos": [-0.11, 0.15], "layers": ["F.Cu"], "index": 1 }, "A08": { "shape": "M -0.03,0.015L 0.03,0.015L 0.03,-0.015L -0.03,-0.015L -0.03,0.015", "pos": [-0.11, 0.1], "layers": ["F.Cu"], "index": 2 }, "A09": { "shape": "M -0.03,0.015L 0.03,0.015L 0.03,-0.015L -0.03,-0.015L -0.03,0.015", "pos": [-0.11, 0.05], "layers": ["F.Cu"], "index": 3 }, "A14": { "shape": "M -0.03,0.015L 0.03,0.015L 0.03,-0.015L -0.03,-0.015L -0.03,0.015", "pos": [-0.11, 0], "layers": ["F.Cu"], "index": 4 }, "A15": { "shape": "M -0.03,0.015L 0.03,0.015L 0.03,-0.015L -0.03,-0.015L -0.03,0.015", "pos": [-0.11, -0.05], "layers": ["F.Cu"], "index": 5 }, "RST": { "shape": "M -0.03,0.015L 0.03,0.015L 0.03,-0.015L -0.03,-0.015L -0.03,0.015", "pos": [-0.11, -0.1], "layers": ["F.Cu"], "index": 6 }, "CLK": { "shape": "M -0.03,0.015L 0.03,0.015L 0.03,-0.015L -0.03,-0.015L -0.03,0.015", "pos": [-0.11, -0.15], "layers": ["F.Cu"], "index": 7 }, "DIO": { "shape": "M -0.03,0.015L 0.03,0.015L 0.03,-0.015L -0.03,-0.015L -0.03,0.015", "pos": [0.11, -0.15], "layers": ["F.Cu"], "index": 8 }, "24-": { "shape": "M -0.03,0.015L 0.03,0.015L 0.03,-0.015L -0.03,-0.015L -0.03,0.015", "pos": [0.11, -0.1], "layers": ["F.Cu"], "index": 9 }, "25+": { "shape": "M -0.03,0.015L 0.03,0.015L 0.03,-0.015L -0.03,-0.015L -0.03,0.015", "pos": [0.11, -0.05], "layers": ["F.Cu"], "index": 10 }, "GND": { "shape": "M -0.03,0.015L 0.03,0.015L 0.03,-0.015L -0.03,-0.015L -0.03,0.015", "pos": [0.11, 0], "layers": ["F.Cu"], "index": 11 }, "VDD": { "shape": "M -0.03,0.015L 0.03,0.015L 0.03,-0.015L -0.03,-0.015L -0.03,0.015", "pos": [0.11, 0.05], "layers": ["F.Cu"], "index": 12 }, "A02": { "shape": "M -0.03,0.015L 0.03,0.015L 0.03,-0.015L -0.03,-0.015L -0.03,0.015", "pos": [0.11, 0.1], "layers": ["F.Cu"], "index": 13 }, "A04": { "shape": "M -0.03,0.015L 0.03,0.015L 0.03,-0.015L -0.03,-0.015L -0.03,0.015", "pos": [0.11, 0.15], "layers": ["F.Cu"], "index": 14 } });

/* -- CONSTANTS -- */
const width = 1;
const height = 1;

function make_grid(x_size, y_size, delta, trace_thickness) {
  const outline = path(
    [-delta * 0.5, (y_size - 0.5) * delta],
    [(x_size - 0.5) * delta, (y_size - 0.5) * delta],
    [(x_size - 0.5) * delta, -delta * 0.5],
    [-delta * 0.5, -delta * 0.5],
  );
  board.addShape("outline", outline);
  let leds = []
  let resistors = []

  //Place componets
  for (let x = 0; x < x_size; x += 1) {
    for (let y = 0; y < y_size; y += 1) {
      // Create each LED object and push it into the leds array
      const led = board.add(LED_1206, {
        translate: pt(x * delta, y * delta),
        rotate: 0,
        id: "LED_1206_IP2_" + String(x) + "_" + String(y)
      });
      leds.push(led); // Store the LED object in the array
      if (x < x_size - 1 && y > 0) {
        const resistor = board.add(R_1206, {
          translate: pt(x * delta + 0.055, (y - 0.5) * delta),
          rotate: 0,
          id: "R_1206_4OG" + String(x) + "_" + String(y)
        })
        resistors.push(resistor)
      }
    }
  }
  //Place vertical wires
  for (let x = 0; x < x_size; x += 1) {
    for (let y = 0; y < y_size - 1; y += 1) {
      board.wire(
        path(leds[x * y_size + y].pad("C"), leds[x * y_size + y + 1].pad("C"), ),
        trace_thickness
      );
    }
  }
  for(let x = 0; x < x_size -1; x++) {
    for(let y = 0; y < y_size-1; y++) {
        if(x < x_size - 2) {
      board.wire(
          path(resistors[x * (y_size-1) + y].pad("2"), resistors[(x+1) * (y_size-1) + y].pad("1"), ),
        trace_thickness
      );
        }
      board.wire(
          path(resistors[x * (y_size-1) + y].pad("2"), leds[(x+1)*y_size+y].pad("A"), ),
        trace_thickness
      );
    }
  }
  for(let x = 0; x < x_size-1; x++) {
    board.wire(
            path(leds[x * y_size + y_size-1].pad("A"), 
                 [leds[x * y_size + y_size-1].pad("A")[0], leds[x * y_size + y_size-1].pad("A")[1]+0.1],
                 [leds[(x+1) * y_size + y_size-1].pad("A")[0], leds[(x+1) * y_size + y_size-1].pad("A")[1]+0.1],
                 leds[(x+1) * y_size + y_size-1].pad("A"), ),
        trace_thickness
      );
  }
}
/* -- ADD_COMPONENTS -- */
make_grid(8, 8, 0.3, 0.015)
/* -- BOARD_SIZE_SHAPE -- */



/* -- RENDER_PCB -- */
const limit0 = pt(-0.2, -0.2);
const limit1 = pt(2.3, 2.3);
const xMin = Math.min(limit0[0], limit1[0]);
const xMax = Math.max(limit0[0], limit1[0]);
const yMin = Math.min(limit0[1], limit1[1]);
const yMax = Math.max(limit0[1], limit1[1]);

renderPCB({
  pcb: board,
  layerColors: {
    "outline": "#002d00ff",
    "B.Cu": "#ff4c007f",
    "F.Cu": "#ff8c00cc",
    "B.Mask": "#00000000",
    "F.Mask": "#00000000",
    "padLabels": "#ffff99e5",
    "componentLabels": "#00e5e5e5",
  },
  limits: {
    x: [xMin, xMax],
    y: [yMin, yMax]
  },
  background: "#00000000",
  mmPerUnit: 25.4
});