// Import the DataSource
import { AppDataSource } from "../config/db";
import { User } from "../entities/User"; // Import the User entity

// Get the repository for the User entity
const userRepository = AppDataSource.getRepository(User);

export const addUser = async (
  id:number,
  firstName: string,
  lastName: string,
  address: string,
  phone: string,
  email: string
): Promise<void> => {
  const user = new User();
  user.id = id;
  user.firstName = firstName;
  user.lastName = lastName;
  user.address = address;
  user.phone = phone;
  user.email = email;

  // Save the new user entity to the database
  await userRepository.save(user);
};

export const getUsers = async (): Promise<User[]> => {
  // Find all users from the database
  const users = await userRepository.find();
  return users;
};
