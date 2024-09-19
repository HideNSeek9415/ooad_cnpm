// src/models/Comment.js
const { DataTypes } = require('sequelize');
const sequelize = require('@configs/database');
const Member = require('./Member');
const Question = require('./Question');

const Comment = sequelize.define('Comment', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  member_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  question_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  comment_text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  creation_time: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
}, {
  tableName: 'comments',
  timestamps: false,
});

Comment.belongsTo(Member, { foreignKey: 'member_id' });
Comment.belongsTo(Question, { foreignKey: 'question_id' });

module.exports = Comment;
