
import FriendCard from "@/components/FriendCard";
import { fakeFriends } from "@/util/fakeinfo";
import { Link03, Plus, X } from "@scottylabs/corgi";
import { createFileRoute } from "@tanstack/react-router";
import ProfileLayout from '@/components/ProfileLayout';
import { useState } from 'react';

export const Route = createFileRoute('/profile/friends')({
  component: RouteComponent,
})

const friends = fakeFriends(10);

export default function RouteComponent() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [andrewId, setAndrewId] = useState('');

    return (
        <ProfileLayout>

        <div className="bg-bg-brandNeutral-secondary-enabled w-full h-full flex flex-col">
            <div className="p-6 relative">
                <h1 className="text-2xl font-semibold text-gray-900 mb-6">Friends</h1>
                <div className="absolute top-6 right-6 flex items-center space-x-2">
                    <button className="cursor-pointer border rounded-full border-stroke-brandNeutral-1 flex items-center gap-x-2 px-3 py-2 text-black hover:bg-bg-brandNeutral-secondary-hover transition">
                        <Link03 className="text-black" /> Share Link
                    </button>
                    <button 
                        onClick={() => setIsModalOpen(true)}
                        className="cursor-pointer border rounded-full border-stroke-brandNeutral-1 flex items-center gap-x-2 px-3 py-2 text-black hover:bg-bg-brandNeutral-secondary-hover transition"
                    >
                        <Plus className="text-black" /> Add Friends
                    </button>
                </div>
            </div>

            
            <div className="flex-1 overflow-y-auto px-6 pb-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {friends.map(friend => (
                        <FriendCard key={friend.name} friend={friend} />
                    ))}
                </div>
            </div>

            {isModalOpen && (
                <div 
                    className="fixed inset-0 flex items-center justify-center z-[9999]"
                    onClick={() => {
                        setIsModalOpen(false);
                        setAndrewId('');
                    }}
                >
                    <div 
                        className="bg-bg-brandNeutral-secondary-enabled rounded-lg p-6 w-full max-w-md mx-4 shadow-xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-semibold text-fg-brandNeutral-primary">Add a friend</h2>
                            <button
                                onClick={() => {
                                    setIsModalOpen(false);
                                    setAndrewId('');
                                }}
                                className="text-fg-brandNeutral-secondary hover:text-fg-brandNeutral-primary transition"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="andrew-id" className="block text-sm font-medium text-fg-brandNeutral-primary mb-2">
                                    Andrew ID
                                </label>
                                <input
                                    id="andrew-id"
                                    type="text"
                                    value={andrewId}
                                    onChange={(e) => setAndrewId(e.target.value)}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter Andrew ID"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
        </ProfileLayout>
    );
}