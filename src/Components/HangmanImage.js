function HangmanImage() {
    const lines = [
        { x1: "342", y1: "294", x2: "6", y2: "294" },
        { x1: "68", y1: "294", x2: "68", y2: "0" },
        { x1: "6", y1: "0", x2: "277", y2: "0" },
        { x1: "214", y1: "0", x2: "215", y2: "42" },
        { cx: "215", cy: "64", r: "23" },
        { x1: "215", y1: "88", x2: "215", y2: "169" },
        { x1: "215", y1: "111", x2: "166", y2: "159" },
        { x1: "215", y1: "111", x2: "264", y2: "159" },
        { x1: "258", y1: "242", x2: "215", y2: "168" },
        { x1: "175", y1: "244", x2: "215", y2: "169" },
    ];

    return (
        <div>
            <svg className="hangman-svg" viewBox="0 0 342 294">
                <g id="c">
                    {/* Map though the svg elements (lines and a circle) and dispalys conditionally */}
                    {lines.map((line, index) => {
                        // Handles the circle in the array of svg-elements
                        return line.r ? (
                            <circle
                                key={index}
                                cx={line.cx}
                                cy={line.cy}
                                r={line.r}
                                className="show"
                                style={{
                                    fill: "none",
                                    stroke: "#f4fafc",
                                    strokeMiterLimit: 1,
                                }}
                            />
                        ) : (
                            <line
                                key={index}
                                x1={line.x1}
                                y1={line.y1}
                                x2={line.x2}
                                y2={line.y2}
                                className="show"
                                style={{
                                    fill: "none",
                                    stroke: "#f4fafc",
                                    strokeMiterLimit: 1,
                                }}
                            />
                        );
                    })}
                </g>
            </svg>
        </div>
    );
}

export default HangmanImage;
