import Big from 'big.js';

const STEN_PER_ACHI = Big(1000000000);
const BLOCKS_PER_DAY = 4608;

const period0 = 0
const period1 = period0 + Math.pow(2,  3)
const period2 = period1 + Math.pow(2,  4)
const period3 = period2 + Math.pow(2,  5)
const period4 = period3 + Math.pow(2,  6)
const period5 = period4 + Math.pow(2,  7)
const period6 = period5 + Math.pow(2,  8)
const period7 = period6 + Math.pow(2,  9)
const period8 = period7 + Math.pow(2, 10)

const reward1 = Math.pow(2, 15)
const reward2 = Math.pow(2, 14)
const reward3 = Math.pow(2, 13)
const reward4 = Math.pow(2, 12)
const reward5 = Math.pow(2, 11)
const reward6 = Math.pow(2, 10)
const reward7 = Math.pow(2,  9)
const reward8 = Math.pow(2,  8)
const reward9 = Math.pow(2,  7)

const timelord_fraction = 0.02 / 100
const pool_fraction = 7 / 8
const farmer_fraction = 1 / 8

export function calculateTimelordReward(height: number): Big {
  if (height == 0) {
    return 0;
  }
  if (height < period1 * BLOCKS_PER_DAY) {
      return STEN_PER_ACHI.times(reward1).times(timelord_fraction);
  }
  if (height < period2 * BLOCKS_PER_DAY) {
      return STEN_PER_ACHI.times(reward2).times(timelord_fraction);
  }
  if (height < period3 * BLOCKS_PER_DAY) {
    return STEN_PER_ACHI.times(reward3).times(timelord_fraction);
  }
  if (height < period4 * BLOCKS_PER_DAY) {
    return STEN_PER_ACHI.times(reward4).times(timelord_fraction);
  }
  if (height < period5 * BLOCKS_PER_DAY) {
    return STEN_PER_ACHI.times(reward5).times(timelord_fraction);
  }
  if (height < period6 * BLOCKS_PER_DAY) {
    return STEN_PER_ACHI.times(reward6).times(timelord_fraction);
  }
  if (height < period7 * BLOCKS_PER_DAY) {
    return STEN_PER_ACHI.times(reward7).times(timelord_fraction);
  }
  if (height < period8 * BLOCKS_PER_DAY) {
    return STEN_PER_ACHI.times(reward8).times(timelord_fraction);
  }

  return STEN_PER_ACHI.times(reward9).times(timelord_fraction);
}

export function calculatePoolReward(height: number): Big {
    if (height == 0) {
      return 0;
    }
    if (height < period1 * BLOCKS_PER_DAY) {
        return STEN_PER_ACHI.times(reward1).times(pool_fraction) - calculateTimelordReward(height);
    }
    if (height < period2 * BLOCKS_PER_DAY) {
        return STEN_PER_ACHI.times(reward2).times(pool_fraction)- calculateTimelordReward(height);
    }
    if (height < period3 * BLOCKS_PER_DAY) {
      return STEN_PER_ACHI.times(reward3).times(pool_fraction)- calculateTimelordReward(height);
    }
    if (height < period4 * BLOCKS_PER_DAY) {
      return STEN_PER_ACHI.times(reward4).times(pool_fraction)- calculateTimelordReward(height);
    }
    if (height < period5 * BLOCKS_PER_DAY) {
      return STEN_PER_ACHI.times(reward5).times(pool_fraction)- calculateTimelordReward(height);
    }
    if (height < period6 * BLOCKS_PER_DAY) {
      return STEN_PER_ACHI.times(reward6).times(pool_fraction)- calculateTimelordReward(height);
    }
    if (height < period7 * BLOCKS_PER_DAY) {
      return STEN_PER_ACHI.times(reward7).times(pool_fraction)- calculateTimelordReward(height);
    }
    if (height < period8 * BLOCKS_PER_DAY) {
      return STEN_PER_ACHI.times(reward8).times(pool_fraction)- calculateTimelordReward(height);
    }

    return STEN_PER_ACHI.times(reward9).times(pool_fraction)- calculateTimelordReward(height);
}


export function calculateBaseFarmerReward(height: number): Big {
  if (height == 0) {
    return 0;
  }
  if (height < period1 * BLOCKS_PER_DAY) {
      return STEN_PER_ACHI.times(reward1).times(farmer_fraction);
  }
  if (height < period2 * BLOCKS_PER_DAY) {
      return STEN_PER_ACHI.times(reward2).times(farmer_fraction);
  }
  if (height < period3 * BLOCKS_PER_DAY) {
    return STEN_PER_ACHI.times(reward3).times(farmer_fraction);
  }
  if (height < period4 * BLOCKS_PER_DAY) {
    return STEN_PER_ACHI.times(reward4).times(farmer_fraction);
  }
  if (height < period5 * BLOCKS_PER_DAY) {
    return STEN_PER_ACHI.times(reward5).times(farmer_fraction);
  }
  if (height < period6 * BLOCKS_PER_DAY) {
    return STEN_PER_ACHI.times(reward6).times(farmer_fraction);
  }
  if (height < period7 * BLOCKS_PER_DAY) {
    return STEN_PER_ACHI.times(reward7).times(farmer_fraction);
  }
  if (height < period8 * BLOCKS_PER_DAY) {
    return STEN_PER_ACHI.times(reward8).times(farmer_fraction);
  }

  return STEN_PER_ACHI.times(reward9).times(farmer_fraction);
}