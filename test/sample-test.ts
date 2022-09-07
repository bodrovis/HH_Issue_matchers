import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";
import type { Sample } from "../typechain-types";

describe("Sample", function() {
  async function dep() {
    const SampleFactory = await ethers.getContractFactory("Sample");
    const sample: Sample = await SampleFactory.deploy();
    await sample.deployed();

    return { sample }
  }

  it('reverts', async function() {
    const { sample } = await loadFixture(dep);

    await expect(sample.demo()).to.be.revertedWith('fail');
  })
});