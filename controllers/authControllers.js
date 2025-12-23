import User from '../models/User.js'; // Your Mongoose schema
import {getAuth, clerkClient} from '@clerk/express';

export const getUser = async (req, res) => {
  try {
    const { isAuthenticated, userId } = getAuth(req);

    if (!isAuthenticated) {
      return res.status(401).json({ error: 'User not authenticated' });
    }

    // Fetch user from Clerk
    const clerkUser = await clerkClient.users.getUser(userId);

    // Check if user exists in MongoDB
    let user = await User.findOne({ clerkUserId: userId });

    // If not, create user in MongoDB
    if (!user) {
      user = await User.create({
        clerkUserId: userId,
        email: clerkUser.emailAddresses[0].emailAddress,
        username: clerkUser.username || '',
      });
    }
    console.log(user)
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
