// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Sample {
    function demo() external pure {
        revert("fail");
    }
}