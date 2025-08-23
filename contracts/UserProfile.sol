// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract UserProfile {
    struct Profile {
        string name;
        string bio;
        string imageHash; // IPFS or Greenfield ref
        string hobby;
        uint8  age;
        uint256 createdAt;
    }

    mapping(address => Profile) public profiles;
    address[] public userList;
    mapping(address => uint256) public premiumExpiration;

    event ProfileCreated(address indexed user);
    event PremiumStatusUpdated(address indexed user, uint256 newExpiry);

    function createOrUpdateProfile(
        string calldata _name,
        string calldata _bio,
        string calldata _imageHash,
        string calldata _hobby,
        uint8 _age
    ) external {
        if (profiles[msg.sender].createdAt == 0) {
            userList.push(msg.sender);
        }
        profiles[msg.sender] = Profile({
            name: _name,
            bio: _bio,
            imageHash: _imageHash,
            hobby: _hobby,
            age: _age,
            createdAt: block.timestamp
        });
        emit ProfileCreated(msg.sender);
    }

    function becomePremium() external payable {
        uint256 fee = 5e15; // 0.005 BNB
        require(msg.value == fee, "Fee must be 0.005 BNB");
        uint256 thirtyDays = 30 days;
        uint256 newExpiry = block.timestamp + thirtyDays;
        if (premiumExpiration[msg.sender] > block.timestamp) {
            newExpiry = premiumExpiration[msg.sender] + thirtyDays;
        }
        premiumExpiration[msg.sender] = newExpiry;
        emit PremiumStatusUpdated(msg.sender, newExpiry);
    }

    function getUserCount() external view returns (uint256) {
        return userList.length;
    }

    function getUserAddressByIndex(uint256 i) external view returns (address) {
        require(i < userList.length, "OOB");
        return userList[i];
    }
}
