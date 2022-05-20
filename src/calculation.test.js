import biorhythmCal from "./calculation";

it("physical calculation", () => {
    const { physical } = biorhythmCal(
        new Date("1995 01 01"),
        new Date("2020 02 18")
    );
    expect(physical).toBeCloseTo(0.5196);
});

it("emotional calculation", () => {
    const { emotional } = biorhythmCal(
        new Date("1995 01 01"),
        new Date("2020 02 18")
    );
    expect(emotional).toBeCloseTo(-0.901);
});

it("intellectual calculation", () => {
    const { intellectual } = biorhythmCal(
        new Date("1995 01 01"),
        new Date("2020 02 18")
    );
    expect(intellectual).toBeCloseTo(0.8146);
});
