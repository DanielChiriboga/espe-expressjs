const Speciality = require("../models/specialty");

const UPDATE_FIELDS = [
  "name", "code", "description", "area", "durationMinutes", "contactEmail", "info", "label"
];

const createSpecialtyService = async (data) => {
  return await Speciality.create(data);
};

const listSpecialtyService = async () => {
  return await Speciality.find();
}

const getSpecialtyService = async (id) => {
  return await Speciality.findById(id);
}

const updateSpecialtyService = async (id, data = {}) => {
  const specialty = await Speciality.findById(id);
  if (!specialty) return null; 
  for (const field of UPDATE_FIELDS) {
    if (data[field] !== undefined) specialty.set(field, data
      [field]);
    }
    return specialty.save();
};

const deleteSpecialtyService = async (id) => {
  return Speciality.findByIdAndDelete(id);
}

const deletebyAreaService = async (area) => {
  return Speciality.deleteMany({ area });
}

module.exports = { 
  createSpecialtyService, 
  listSpecialtyService, 
  getSpecialtyService,
  updateSpecialtyService,
  deleteSpecialtyService,
  deletebyAreaService
};