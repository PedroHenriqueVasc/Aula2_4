import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  grade: {
    type: Number,
    required: true,
    validate(grade) {
      if (grade < 0)
        throw new Error('Valor negativo para nota não é permitido');
    },
  },
  lastModified: {
    type: Date,
    default: Date.now,
  },
});

const studentModel = mongoose.model('student', studentSchema, 'student');

export { studentModel };
