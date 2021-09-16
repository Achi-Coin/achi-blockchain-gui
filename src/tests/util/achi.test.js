const achi = require("../../util/achi");

describe("achi", () => {
  it("converts number sten to achi", () => {
    const result = achi.sten_to_achi(1000000);

    expect(result).toBe(0.000001);
  });
  it("converts string sten to achi", () => {
    const result = achi.sten_to_achi("1000000");

    expect(result).toBe(0.000001);
  });
  it("converts number sten to achi string", () => {
    const result = achi.sten_to_achi_string(1000000);

    expect(result).toBe("0.000001");
  });
  it("converts string sten to achi string", () => {
    const result = achi.sten_to_achi_string("1000000");

    expect(result).toBe("0.000001");
  });
  it("converts number achi to sten", () => {
    const result = achi.achi_to_sten(0.000001);

    expect(result).toBe(1000000);
  });
  it("converts string achi to sten", () => {
    const result = achi.achi_to_sten("0.000001");

    expect(result).toBe(1000000);
  });
  it("converts number sten to colouredcoin", () => {
    const result = achi.sten_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it("converts string sten to colouredcoin", () => {
    const result = achi.sten_to_colouredcoin("1000000");

    expect(result).toBe(1000);
  });
  it("converts number sten to colouredcoin string", () => {
    const result = achi.sten_to_colouredcoin_string(1000000);

    expect(result).toBe("1,000");
  });
  it("converts string sten to colouredcoin string", () => {
    const result = achi.sten_to_colouredcoin_string("1000000");

    expect(result).toBe("1,000");
  });
  it("converts number colouredcoin to sten", () => {
    const result = achi.colouredcoin_to_sten(1000);

    expect(result).toBe(1000000);
  });
  it("converts string colouredcoin to sten", () => {
    const result = achi.colouredcoin_to_sten("1000");

    expect(result).toBe(1000000);
  });
});
