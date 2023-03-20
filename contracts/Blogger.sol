// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Blogger {
    uint256 public s_count = 0;

    struct Article {
        uint256 id;
        address owner;
        string title;
        string content;
    }

    Article[] s_articles;

    function createArticle(string memory title, string memory content) public {
        s_articles.push(Article(s_count, msg.sender, title, content));

        s_count += 1;
    }

    function getArticles() public view returns (Article[] memory) {
        return s_articles;
    }

    function getCount() public view returns (uint256) {
        return s_count;
    }
}
