import { rect } from "@thi.ng/geom";
import { add2 } from "@thi.ng/vectors";
import type { IMGUI } from "../gui";
import { textLabelRaw } from "./textlabel";

export const tooltipRaw = (gui: IMGUI, tooltip: string) => {
    const theme = gui.theme;
    const p = add2(null, [0, 10], gui.mouse);
    gui.addOverlay(
        rect(p, [tooltip.length * theme.charWidth + theme.pad, 20], {
            fill: theme.bgTooltip,
        }),
        textLabelRaw(
            add2(null, [4, 10 + theme.baseLine], p),
            theme.textTooltip,
            tooltip
        )
    );
};
