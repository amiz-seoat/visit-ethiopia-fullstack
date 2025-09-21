import Review from '../models/Review.js'
import catchAsync from '../utils/catchAsync.js'
import AppError from '../utils/appError.js'
import factory from './handlerFactory.js'

// Test
export const test = catchAsync(async (req, res) => {
  res.status(201).json({
    status: 'success',
    message: 'test file',
  })
})

// Admin: Get all pending reviews
export const getPendingReviews = factory.getAll(Review, { status: 'pending' })

// Admin: Approve review
export const approveReview = factory.updateOne(Review)

// ✅ User: Create new review
export const createReview = catchAsync(async (req, res, next) => {
  const newReview = await Review.create({
    user: req.user.id, // taken from logged in user
    itemType: req.body.itemType,
    itemId: req.body.itemId,
    rating: req.body.rating,
    title: req.body.title,
    comment: req.body.comment,
    images: req.body.images || [],
    dateOfExperience: req.body.dateOfExperience,
  })

  res.status(201).json({
    status: 'success',
    data: newReview,
  })
})

// ✅ User: Get current user's reviews
export const getMyReviews = catchAsync(async (req, res, next) => {
  const reviews = await Review.find({ user: req.user.id })

  res.status(200).json({
    status: 'success',
    results: reviews.length,
    data: reviews,
  })
})

// ✅ Update review (owner only)
export const updateReview = catchAsync(async (req, res, next) => {
  // Find the review and check if user owns it
  const review = await Review.findById(req.params.id)

  if (!review) {
    return next(new AppError('No review found with that ID', 404))
  }

  // Check if the current user is the owner of the review
  if (review.user._id.toString() !== req.user.id) {
    return next(new AppError('You can only update your own reviews', 403))
  }

  // Prevent updating user field
  if (req.body.user) {
    delete req.body.user
  }

  // Update the review
  const updatedReview = await Review.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  )

  res.status(200).json({
    status: 'success',
    data: { data: updatedReview },
  })
})

// ✅ Delete review (owner/admin)
export const deleteReview = catchAsync(async (req, res, next) => {
  // Find the review
  const review = await Review.findById(req.params.id)

  if (!review) {
    return next(new AppError('No review found with that ID', 404))
  }

  // Check if the current user is the owner of the review OR an admin
  if (review.user.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(new AppError('You can only delete your own reviews', 403))
  }

  // Delete the review
  await Review.findByIdAndDelete(req.params.id)

  res.status(204).json({
    status: 'success',
    data: null,
  })
})
