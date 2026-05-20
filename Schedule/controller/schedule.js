const Slot = require('../model/slot');

// Define total capacity per slot
const TOTAL_CAPACITY = 4;
const DEFAULT_SLOTS = ['2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM'];

exports.getSlots = async (req, res, next) => {
    try {
        // Fetch all bookings
        const bookings = await Slot.findAll();
        
        // Calculate remaining capacity for each slot
        const slotAvailability = DEFAULT_SLOTS.map(time => {
            const bookedCount = bookings.filter(b => b.time === time).length;
            return {
                time: time,
                available: Math.max(0, TOTAL_CAPACITY - bookedCount)
            };
        });

        res.status(200).json({ slots: slotAvailability, bookings: bookings });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch slots' });
    }
};

exports.bookSlot = async (req, res, next) => {
    const { time, name, email } = req.body;
    try {
        // Double check current availability before booking
        const bookedCount = await Slot.count({ where: { time: time } });
        
        if (bookedCount >= TOTAL_CAPACITY) {
            return res.status(400).json({ message: 'Slot fully booked!' });
        }

        await Slot.create({ time, name, email });
        res.status(201).json({ message: 'Booking successful!' });
    } catch (err) {
        res.status(500).json({ error: 'Booking failed' });
    }
};